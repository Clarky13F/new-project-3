// this App.jsx page defines the app at the highest level [i.e. that which is most zoomed out/components, NavBar/Header/Footer/Outlet]
// functional component:
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer.jsx" 
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Auth from "./components/Auth";
import './App.css';
import Header from "./components/Header.jsx"

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => { 
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <Provider store={store}>
          <Auth>
            <Outlet />
          </Auth>
        </Provider>
      </HelmetProvider>
      <Footer class="Footer"/>
    </ApolloProvider>
  );
}

export default App 
// export * from '@testing-library/react-native';

// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.