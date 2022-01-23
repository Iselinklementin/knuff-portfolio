import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Container from "../ui/Container";

export default function Websites() {
  return (
    <>
      <div className="wrapper websites">
        <Nav />
        <Container>
          <h2>Frontend development</h2>
          <h1>Website</h1>
          <div className="top-icon"></div>
          <div className="iphone"></div>
        </Container>
        <div className="background-container">
          <div className="background"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
