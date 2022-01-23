import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Container from "../ui/Container";
import iPhone from "../../images/developer/iphone-web.png";

export default function Websites() {
  return (
    <>
      <div className="wrapper websites">
        <Nav />
        <Container>
          <h2>Frontend development</h2>
          <h1>Website</h1>
          <div className="top-icon"></div>
        </Container>
        <img src={iPhone} alt="" className="image" />

        <div className="background-container">
          <div className="background"></div>
        </div>
        <div className="head-line"></div>
        <p className="text">The space where art and science collide.</p>

        <div className="text-container">
          <p>I want to bring both the technical and visual aspects of digital products to life.</p>

          <p>
            I am a fast learner and have a strong desire to use my new skills in frontend web development. UX, beautiful
            pixels and writing clean accessible code matters to me. I hope that my projects here shows at least a small
            part of my enthusiasm for the craft. Have a look at my school projects.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
