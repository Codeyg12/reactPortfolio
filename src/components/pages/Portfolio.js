import React from "react";
import portfolio from '../../portfolio.json'
import Card from './Card.js'

export default function Portfolio() {
    return (
        <section>
            <h1>Projects</h1>
            <div>
                {portfolio.map(portfolio => (
                    <Card key={portfolio.id} image={portfolio.image} title={portfolio.title} github={portfolio.github} link={portfolio.link} />
                ))}
            </div>
        </section>
    )
}