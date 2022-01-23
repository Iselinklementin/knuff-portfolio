import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Container from "../ui/Container";
import Mugs from "../../images/design/mugs.png";

export default function Portfolio() {
  return (
    <>
      <div className="wrapper design">
        <Nav />
        <Container>
          <h2>Graphic design</h2>
          <h1>Portfolio</h1>
          <div className="top-icon"></div>
        </Container>

        <img src={Mugs} alt="" className="image" />

        <div className="background-container">
          <div className="background"></div>
        </div>
        <div className="head-line"></div>
        <p className="text">It’s not about decorating, but communicating.</p>
        <div className="text-container">
          <p>
            Most of my time I have been creating and working closely with typography, layout, and all of the details in
            between.
          </p>

          <p>
            I bring experience, creativity and understanding to every project I work on, and I’ve been fortunate to work
            with several companies to develop my skill set. I have chosen a few of my projects here, take a look around.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
