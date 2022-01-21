import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import Me from "../../images/about-me.jpg";
import { Link } from "react-router-dom";
import ImageData from "../constant/ImageData";

export default function About() {
  return (
    <>
      <div className="wrapper about-me">
        <Nav />
        <div className="clouds"></div>
        <Container>
          <Heading text="Hello!" />
          <h3>Thanks for stopping by.</h3>
          <h2>
            I’m Iselin. I like laughter, learning, structure, pretty colors, honesty, gaming and people who have fun
            facts.
          </h2>
          <p>I’m quietly confident, self going, funny and easily entertained. </p>
          <div className="head-line"></div>

          <div className="me-container">
            <img src={Me} className="card-img" />
            <div className="image-divider"></div>
            <a className="about-btn" href="#">
              Resume
            </a>
          </div>

          <p>
            I am a creative soul. I never seem to stop creating anything and there is always an idea brewing in my mind.
            Even though I’m creative, I think logically about all things, and that’s how I got in to frontend
            development. I enjoy using my creativity to create code and solving problems, and I always have the user in
            mind when I’m working.
          </p>
        </Container>

        <section className="skillset">
          <Container>
            <h3>
              <span className="professional">Professional</span> skillset
            </h3>
            <h4>Design thinking</h4>
            <p>Empathize, defining the needs and creating ideas.</p>
            <h4>Prototype</h4>
            <p>Making a presentation and testing the site before coding.</p>
            <h4>UX / UI</h4>
            <p>Creating beautiful design, and test the user’s overall experience.</p>
            <h4>Development</h4>
            <p>Keeping up with trends and make sure websites are optimized for users and search engines.</p>

            <h3>
              <span className="personal">Personal</span> skillset
            </h3>

            <h4>Create</h4>
            <p>Decorating rooms, drawing, doing gardening or building stuff.</p>
            <h4>Gamer</h4>
            <p>It started with Duke Nukem in 1993, after that I was sold!</p>
            <h4>Jigsaw Puzzles</h4>
            <p>There is nothing more satisfying for me than putting the last piece of the puzzle in its place.</p>
            <h4>Active</h4>
            <p>I like stay active. Hiking, going to the gym or trying new sports.</p>
          </Container>
        </section>

        <section className="get-in-touch-container">
          <Heading text="Get in touch" class="get-in-touch-heading" />
          <p>
            Want to get in touch? If saying my name three times doesn’t work, you could also use these methods. My inbox
            is always open.
          </p>

          <div className="contact-link-container">
            <Link to="iselin@knuff.no">
              <i className="far fa-envelope"></i>iselin@knuff.no
            </Link>
          </div>

          <div className="contact-link-container">
            <Link to="#">
              <i className="fab fa-linkedin"></i> LinkedIn
            </Link>
          </div>
        </section>

        <Container>
          <div className="line"></div>
        </Container>

        <p>Companies I’ve worked with:</p>
        <ImageData />
      </div>
      <Footer />
    </>
  );
}
