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
        <p>Text</p>
      </div>
      <Footer />
    </>
  );
}
