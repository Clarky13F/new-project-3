import "./Header.css";

import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "0",
    width: "100%",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    margin: "0.5rem",
  },
  undecoratedLink: {
    textDecoration: "none",
  },
};

export default function Header() {
  const { isAuthenticated } = useSelector(getUser());

  const handleLogout = (e) => {
    AuthServices.logout();
  };

  return (
    <nav className="NavBar" style={styles.container}>
      <Link className="LiveInteractive" to={"/"} style={styles.undecoratedLink}>
        <h1 className="G0">Live:Interactive</h1>
      </Link>
      <div className="Buttons" style={styles.buttonDiv}>
        {isAuthenticated && (
          <Link to={"/dashboard"}>
            <button className="Dashboard" style={styles.button}>Dashboard</button>
          </Link>
        )}
        {isAuthenticated && (
          <Link to={"/profile"}>
            <button className="Profile" style={styles.button}>Profile</button>
          </Link>
        )}
        {isAuthenticated && (
          <button onClick={handleLogout} className="Logout" style={styles.button}>
            Logout
          </button>
        )}
        {!isAuthenticated && (
          <Link to={"/signup"}>
            <button className="SignUp" style={styles.button}>Sign Up</button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={"/login"}>
            <button className="Login" style={styles.button}>Login</button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={"/donations"}>
            <button className="Donations" style={styles.button}>Donations</button>
          </Link>
        )}{!isAuthenticated && (
          <Link to={"/purpose"}>
            <button className="AboutUs" style={styles.button}>About Us</button>
          </Link>
        )}{!isAuthenticated && (
          <Link to={"/Contact"}>
            <button className="ContactUs" style={styles.button}>Contact Us</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
