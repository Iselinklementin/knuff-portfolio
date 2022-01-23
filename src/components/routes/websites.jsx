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
        <p>Text</p>
      </div>

      <Footer />
    </>
  );
}
