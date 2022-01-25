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
          <h3 className="mobile graphic">Graphic design</h3>
          <h1>Portfolio</h1>
          <h3 className="tablet graphic">Graphic design</h3>
          <div className="top-icon"></div>

          <div className="image-container">
            <div className="clouds"></div>
            <img src={Mugs} alt="" className="image" />
            <div className="background-tablet"></div>
          </div>
        </Container>

        <div className="background-container">
          <div className="background"></div>
        </div>

        <Container>
          <div className="head-line"></div>
          <p className="text">It’s not about decorating, but communicating.</p>
          <div className="text-container">
            <p>
              Most of my time I have been creating and working closely with typography, layout, and
              all of the details in between.
            </p>

            <p>
              I bring experience, creativity and understanding to every project I work on, and I’ve
              been fortunate to work with several companies to develop my skill set. I have chosen a
              few of my projects here, take a look around.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
