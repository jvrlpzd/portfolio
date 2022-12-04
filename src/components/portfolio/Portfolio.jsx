import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const projets = [
  {
    id: 1,
    image: IMG1,
    title: "Sentiers Perdus",
    github: "https://github.com/jvrlpzd/sentiers-perdus",
    demo: "https://www.youtube.com/watch?v=gPlwe454UCU",
    video: "https://www.youtube.com/watch?v=gPlwe454UCU"
  },
  {
    id: 2,
    image: IMG2,
    title: "Virtual Met'Art",
    github: "https://github.com/jvrlpzd/VirtualMetArt",
    demo: "https://www.youtube.com/watch?v=f53XHcThWIs",
    video: "https://www.youtube.com/watch?v=f53XHcThWIs"
  },
  {
    id: 3,
    image: IMG3,
    title: "Pas à Pas",
    github: "https://github.com/jvrlpzd/TakeItEasy",
    demo: "https://www.youtube.com/watch?v=QmTEQYGcjLI",
    video: "https://www.youtube.com/watch?v=QmTEQYGcjLI"
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio",
    github: "https://github.com/jvrlpzd/portfolio",
    demo: "https://github.com/jvrlpzd",
    video: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "Plumes et Graines (2020)",
    github: "https://plumesetgraines.fr/",
    demo: "https://plumesetgraines.fr/",
    video: ""
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes projets</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projets.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Aperçu
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
