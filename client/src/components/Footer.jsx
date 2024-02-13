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
    <div style={styles.container}>
      <div>
      <h5>&copy; {new Date().getFullYear()} Brandon Clark, Marlie Ford, and Rutter McQuigg</h5>
    </div>
    <div>
    <li><a href="https://github.com/Clarky13F/new-project-3">GitHub</a></li>
    </div>
    </div>
  );
}
