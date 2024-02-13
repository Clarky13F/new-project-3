import "./Footer.css";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Footer() {
  return (
    <div className="Footer" style={styles.container}>
      <p>&copy; {new Date().getFullYear()}</p>
      <div><li><a href="https://github.com/Clarky13F/new-project-3">GitHub</a></li></div>
      <p className="FooterText">Generated using React via Brandon Clark, Marlie Ford, and Rutter McQuigg</p>
      <button><img id="FooterIcon" src="../public/logo192.png" alt="FooterIcon" /></button></div>
  );
}