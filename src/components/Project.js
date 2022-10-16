import React from "react";
import portfolio from "../portfolio.json";
import Card from "./pages/Card";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2%",
    textAlign: "center",
    marginBottom: "10%",
  },
  head: {
    fontSize: "2em",
    textAlign: "center",
  },
};

export default function Portfolio() {
  return (
    <section>
      <h1 style={styles.head}>Projects</h1>
      <div style={styles.grid}>
        {portfolio.map((portfolio) => (
          <Card
            key={portfolio.id}
            image={portfolio.image}
            title={portfolio.title}
            github={portfolio.github}
            link={portfolio.link}
          />
        ))}
      </div>
    </section>
  );
}
