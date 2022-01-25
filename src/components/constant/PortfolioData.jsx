import Cinderella from "../../images/design/projects/cinderella.jpg";
import Subway from "../../images/design/projects/Subwayvk.jpg";
import Bjerke from "../../images/design/projects/bjerke.jpg";
import FormatEiendom from "../../images/design/projects/fe.jpg";
import Container from "../ui/Container";

const portfolioProjects = [
  {
    id: 1,
    name: "Cinderella",
    description:
      "Cinderella is an international company. They want to give people an environmentally friendly solution for processing toilet waste.",
    tags: [
      { name: "Product design", id: 1 },
      { name: "Trade Fair", id: 2 },
      { name: "Campaigns", id: 3 },
    ],
    src: [Cinderella],
  },
  {
    id: 2,
    name: "Subway",
    description:
      "SUBWAY the world’s largest sandwich chain with more than 44,000 outlets around the world. They deliver quick, nutritious meals.",
    tags: [
      { name: "Business Cards", id: 4 },
      { name: "Tags", id: 5 },
      { name: "Ads", id: 6 },
    ],
    src: [Subway],
  },
  {
    id: 3,
    name: "Bjerke Spekemat",
    description:
      "They produce salads, dressings and coarse pâté as well as many different types of cured meats and cold cuts. They strive to maintain high quality.",
    tags: [
      { name: "Brochure", id: 7 },
      { name: "Packaging", id: 8 },
      { name: "Rollups", id: 9 },
    ],
    src: [Bjerke],
  },
  {
    id: 4,
    name: "Format Eiendom",
    description:
      "Format Eiendom is an engineering company that works with development, planning, construction and sale of homes and commercial buildings.",
    tags: [
      { name: "Advertising", id: 10 },
      { name: "Magazines", id: 11 },
      { name: "Logodesign", id: 12 },
    ],
    src: [FormatEiendom],
  },
];

export function PortfolioDataMobile() {
  return (
    <>
      {portfolioProjects.map(project => {
        return (
          <section className="card-background-mobile card-project" key={project.id}>
            <div className="expand"></div>
            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul key={"mobile" + project.name}>
                {project.tags.map(tag => {
                  console.log(tag);
                  return <li key={tag.id}>{tag.name}</li>;
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}

export function PortfolioDataTablet() {
  return (
    <>
      {portfolioProjects.map(project => {
        return (
          <Container key={project.name}>
            <section
              className="card-background-tablet card-project"
              key={project.id + project.name}>
              <div className="card-image-container">
                <img src={project.src} alt="" className="project-img" />
              </div>

              <div className="card-text-container">
                <div>
                  <div className="circle"></div>
                  <div className="expand"></div>
                </div>

                <div className="card-text-wrap">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul key={"tablet" + project.name}>
                    {project.tags.map(tag => {
                      console.log(tag);
                      return <li key={tag.id}>{tag.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </section>
          </Container>
        );
      })}
    </>
  );
}
