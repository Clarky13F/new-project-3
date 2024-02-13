import Page from "../components/Page";

const headContent = (
  <>
    <title>Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <div><h2>Welcome to Live:Interactive</h2></div>
      <div><h3>Join today to to getting help finding or returning lost items today!</h3></div>
    </Page>
  );
}