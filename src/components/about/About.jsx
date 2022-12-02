import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Qualités</h5>
              <small>
                Curieux
                <br />
                Autonome
                <br />
                Proactif
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Équipe</h5>
              <small>
                Adaptable
                <br />
                Patient
                <br />
                Pédagogue
              </small>
            </article>
          </div>

          <p>
            Après 8 années dans l'enseignement et un an d'apprentissage en
            autonomie sur codecademy à côté de mon travail, j'ai décide de
            rejoindre la formation FullStack (React.js / Node.js) à la Wild Code
            School pour professionnaliser ma passion. Trilingue et autonome, je
            cherche constamment à apprendre et à développer mes compétences.
            Fort de mes expériences passées dans l’enseignement dans différents
            pays, j'ai acquis de nombreuses soft-skills qui me permettent de
            m’adapter facilement à de nouveaux milieux professionnels.
          </p>

          <div className="about-btn">
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
