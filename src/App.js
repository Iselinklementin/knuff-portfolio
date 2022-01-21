import "./sass/style.scss";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Bird from "./images/home/bird.jpg";
import Me from "./images/about-me.jpg";
import { Modal } from "./components/ui/Modal";
import { useState } from "react";
import React from "react";
import List from "./components/ui/List";
import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  // Dette kan nok settes i egen fil
  const designList = [
    "Adobe InDesign",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe XD",
    "Procreate",
  ];

  const developerList = ["Sass", "React", "Bootstrap", "WordPress API", "Strapi API"];
  const designObjects = designList.map((program, i) => ({ id: i, title: program }));
  const developerObjects = developerList.map((program, i) => ({ id: i, title: program }));

  return (
    <>
      <div className="wrapper index">
        <Nav />

        <Container>
          <section className="home-introduction-heading">
            <div className="intro-clouds"></div>
            <h2>Hello! I`m Iselin,</h2>

            <Heading text="I`m a frontend developer & designer!" class="mobile-heading" />
            <Heading text="A frontend developer & designer!" class="tablet-heading" />
            <div className="head-line"></div>
          </section>

          <section className="intro-section">
            <h3>Nice to meet you</h3>
            <div className="code-icon"></div>
            <p>
              I love clean code, creating strategies, problem solving and design that makes people
              act.
            </p>
            <p>I’m at my happiest when I’m creating, learning & exploring.</p>
          </section>

          <div className="image-container">
            <div className="intro-image"></div>
            <p>Welcome</p>
            <div className="welcome-line"></div>
          </div>
        </Container>

        <section className="designer card">
          <div className="card-top">
            <img src={Bird} className="card-img" />
            <div className="card-divider"></div>
            <h3 className="card-designer-heading">Designer</h3>
            <a className="design-btn desktop-btn" href="Portfolio">
              Portfolio
            </a>
            <div className="keywords">
              <p>Colours</p>
              <p>Drawing</p>
              <p>Typography</p>
              <p>Identity</p>
              <p>Creative</p>
            </div>
          </div>

          <div className="description description-desktop design">
            <h3 className="card-designer-heading-desktop">
              Designer<span>.</span>
            </h3>
            <p>
              I’m a graphic designer and I’ve worked in all areas of branding and design for print.
              I have designed small business cards, large bus wrappings - and everything between.
              Take a look at my portfolio to see some of my work.
            </p>
            <div className="keywords-desktop">
              <p>Colours</p>
              <p>Drawing</p>
              <p>Typography</p>
              <p>Identity</p>
              <p>Creative</p>
            </div>
          </div>

          <div className="list-background">
            <div className="list-container design-list">
              <p>Programs I’ve been working with regularly:</p>
              <List listItems={designObjects} />
              <a className="design-btn tablet-btn" href="Portfolio">
                Portfolio
              </a>
            </div>
          </div>

          <div className="description description-tablet">
            <p>
              I’m a graphic designer and I’ve worked in all areas of branding and design for print.
              I have designed small business cards, large bus wrappings - and everything between.
              Take a look at my portfolio to see some of my work.
            </p>
            <div className="keywords-desktop">
              <p>Colours</p>
              <p>Drawing</p>
              <p>Typography</p>
              <p>Identity</p>
              <p>Creative</p>
            </div>

            <a className="design-btn mobile-btn" href="Portfolio">
              Portfolio
            </a>
          </div>
        </section>

        <div className="divide"></div>

        <section className="developer card">
          <div className="card-top">
            <img src={Bird} className="card-img" />
            <div className="card-divider"></div>
            <h3 className="card-developer-heading">Developer</h3>
            <a className="developer-btn desktop-btn" href="Websites">
              Websites
            </a>
            <div className="keywords">
              <p>Meaningful</p>
              <p>Clean</p>
              <p>Readable</p>
              <p>DRY</p>
              <p>Organized</p>
            </div>
          </div>

          <div className="description description-desktop">
            <h3 className="card-developer-heading-desktop">
              Developer<span>.</span>
            </h3>
            <p>
              Through my studies at Noroff I have gotten exposure to a wide range of web development
              skills. I’d love to work with forward-thinking people to design and build interactive,
              accessible websites and products.
            </p>
            <div className="keywords-desktop">
              <p>Meaningful</p>
              <p>Clean</p>
              <p>Readable</p>
              <p>DRY</p>
              <p>Organized</p>
            </div>
          </div>

          <div className="list-background">
            <div className="list-container developer-list">
              <p>A few technologies I’ve been working with recently:</p>
              <List listItems={developerObjects} />
              <a className="developer-btn tablet-btn" href="Websites">
                Websites
              </a>
            </div>
          </div>

          <div className="description description-tablet">
            <p>
              Through my studies at Noroff I have gotten exposure to a wide range of web development
              skills. I’d love to work with forward-thinking people to design and build interactive,
              accessible websites and products.
            </p>
            <div className="keywords-desktop">
              <p>Meaningful</p>
              <p>Clean</p>
              <p>Readable</p>
              <p>DRY</p>
              <p>Organized</p>
            </div>
            <a className="developer-btn mobile-btn" href="Websites">
              Websites
            </a>
          </div>
        </section>

        <section className="about card">
          <div className="about-me-line"></div>
          <div className="about-img-container">
            <img src={Me} className="card-img" />
            <div className="card-divider"></div>
            <a className="about-btn tablet-btn desktop-btn" href="About">
              About me
            </a>
          </div>

          <div className="about-text">
            <h2>Hello.</h2>
            <p className="about-intro">
              I’m a designer, frontend developer, gamer and puzzle enthusiast.
            </p>
            <p>
              I’m based in Sandefjord and have two kids. After 8 years working as a graphic designer
              it was time to explore and evolve, so I went back to school to learn how to code!
            </p>

            <p>
              I believe my experience working as a designer is a great strength in development. Both
              with UX and creating UI - but also when writing short, meaningful code.
            </p>

            <a className="about-btn mobile-btn" href="About">
              About me
            </a>
          </div>
        </section>

        {/* Modal */}

        <Modal shouldShow={shouldShowModal} onClose={() => setShouldShowModal(false)}>
          <p className="test">testing</p>
        </Modal>
        {/* Dette må knappen ha: */}
        <button onClick={() => setShouldShowModal(!shouldShowModal)}>Show modal</button>
      </div>
      <Footer />
    </>
  );
}
