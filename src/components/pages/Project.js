import React from "react";
import portfolio from "../../portfolio.json";
import Card from "./Card";

export default function Portfolio() {
  return (
    <section>
      <h1 className="projectHead">Projects</h1>
      <div className="projectContainer">
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
