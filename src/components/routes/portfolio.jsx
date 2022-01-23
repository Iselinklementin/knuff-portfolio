import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Container from "../ui/Container";

export default function Portfolio() {
  return (
    <>
      <div className="wrapper design">
        <Nav />
        <Container>
          <h2>Graphic design</h2>
          <h1>Portfolio</h1>
          <div className="top-icon"></div>
          <div className="mugs"></div>
        </Container>

        <div className="background-container">
          <div className="background"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
