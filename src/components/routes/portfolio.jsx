import Nav from "../layout/Nav";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Container from "../ui/Container";
import Mugs from "../../images/design/mugs.png";
import { PortfolioDataMobile, PortfolioDataTablet } from "../constant/PortfolioData";
import Loader from "../ui/Loader";

export default function Portfolio() {
  return (
    <>
      <div className="wrapper design">
        <Loader />
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
              Most of my time I have been creating and working closely with typography, layout, and all of the details
              in between.
            </p>

            <p>
              I bring experience, creativity and understanding to every project I work on, and I’ve been fortunate to
              work with several companies to develop my skill set. I have chosen a few of my projects here, please take
              a look.
            </p>
          </div>
        </Container>

        <PortfolioDataMobile />

        <Container>
          <PortfolioDataTablet />
        </Container>

        <Container>
          <div className="links-container">
            <Link to="/websites" className="design-links">
              <i className="fas fa-chevron-left"></i> Developer
            </Link>
            <Link to="/about" className="design-links">
              About me <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
