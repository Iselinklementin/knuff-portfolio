import "./sass/style.scss";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Bird from "./images/home/bird1.jpg";
import Manet from "./images/home/manet.jpg";
import Me from "./images/about-me.jpg";
import List from "./components/ui/List";
import Container from "./components/ui/Container";
import Heading from "./components/ui/Heading";
import { Link } from "react-router-dom";
import Loader from "./components/ui/Loader";
import React from "react";

export default function App() {
  const designList = ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Procreate"];
  const developerList = ["Sass", "React", "Bootstrap", "WordPress API", "Strapi API"];

  return (
    <>
      <div className="wrapper index">
        <Loader />
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
            <p>I love clean code, creating strategies, problem solving and design that makes people act.</p>
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

            <Link to="/portfolio" className="design-btn desktop-btn">
              Portfolio
            </Link>
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
              I’m a graphic designer and I’ve worked in all areas of branding and design for print. I have designed
              small business cards, large bus wrappings - and everything between. Take a look at my portfolio to see
              some of my work.
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
              <List listItems={designList} />
              <Link to="/portfolio" className="design-btn tablet-btn">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="description description-tablet">
            <p>
              I’m a graphic designer and I’ve worked in all areas of branding and design for print. I have designed
              small business cards, large bus wrappings - and everything between. Take a look at my portfolio to see
              some of my work.
            </p>
            <div className="keywords-desktop">
              <p>Colours</p>
              <p>Drawing</p>
              <p>Typography</p>
              <p>Identity</p>
              <p>Creative</p>
            </div>

            <Link to="/portfolio" className="design-btn mobile-btn">
              Portfolio
            </Link>
          </div>
        </section>

        <div className="divide"></div>

        <section className="developer card">
          <div className="card-top">
            <img src={Manet} className="card-img" />
            <div className="card-divider"></div>
            <h3 className="card-developer-heading">Developer</h3>

            <Link to="/websites" className="developer-btn desktop-btn">
              Websites
            </Link>

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
              Through my studies at Noroff I have gotten exposure to a wide range of web development skills. I’d love to
              work with forward-thinking people to design and build interactive, accessible websites and products.
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
              <List listItems={developerList} />

              <Link to="/websites" className="developer-btn tablet-btn">
                Websites
              </Link>
            </div>
          </div>

          <div className="description description-tablet">
            <p>
              Through my studies at Noroff I have gotten exposure to a wide range of web development skills. I’d love to
              work with forward-thinking people to design and build interactive, accessible websites and products.
            </p>
            <div className="keywords-desktop">
              <p>Meaningful</p>
              <p>Clean</p>
              <p>Readable</p>
              <p>DRY</p>
              <p>Organized</p>
            </div>

            <Link to="/websites" className="developer-btn mobile-btn">
              Websites
            </Link>
          </div>
        </section>

        <section className="about card">
          <div className="about-me-line"></div>
          <div className="about-img-container">
            <img src={Me} className="card-img" />
            <div className="card-divider"></div>

            <Link to="/about" className="about-btn tablet-btn desktop-btn">
              About me
            </Link>
          </div>

          <div className="about-text">
            <h2>Hello.</h2>
            <p className="about-intro">I’m a designer, frontend developer, gamer and puzzle enthusiast.</p>
            <p>
              I’m based in Sandefjord and have two kids. After 8 years working as a graphic designer it was time to
              explore and evolve, so I went back to school to learn how to code!
            </p>

            <p>
              I believe my experience working as a designer is a great strength in development. Both with UX and
              creating UI - but also when writing short, meaningful code.
            </p>

            <Link to="/about" className="about-btn mobile-btn">
              About me
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
