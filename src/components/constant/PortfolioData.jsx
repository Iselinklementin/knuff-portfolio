import Cinderella from "../../images/design/projects/cinderella.jpg";
import Subway from "../../images/design/projects/Subwayvk.jpg";
import Bjerke from "../../images/design/projects/bjerke.jpg";
import FormatEiendom from "../../images/design/projects/fe.jpg";

const portfolioProjects = [
  {
    id: 1,
    name: "Cinderella",
    description:
      "Cinderella is an international company. They want to give people an environmentally friendly solution for processing toilet waste.",
    tags: ["Product design", "Trade Fair", "Advertising"],
    src: [Cinderella],
  },
  {
    id: 2,
    name: "Subway",
    description:
      "SUBWAY the world’s largest sandwich chain with more than 44,000 outlets around the world. They deliver quick, nutritious meals.",
    tags: ["Business Cards", "Tags", "Advertising"],
    src: [Subway],
  },
  {
    id: 3,
    name: "Bjerke Spekemat",
    description:
      "They produce salads, dressings and coarse pâté as well as many different types of cured meats and cold cuts. They strive to maintain high quality.",
    tags: ["Brochure", "Product design", "Rollups"],
    src: [Bjerke],
  },
  {
    id: 4,
    name: "Format Eiendom",
    description:
      "Format Eiendom is an engineering company that works with development, planning, construction and sale of homes and commercial buildings.",
    tags: ["Brochure", "Advertising", "Logodesign"],
    src: [FormatEiendom],
  },
];

export function PortfolioDataMobile() {
  return (
    <>
      {portfolioProjects.map(project => {
        return (
          <section className="card-background" key={project.id}>
            <div className="expand"></div>
            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map(tag => {
                  return <li key={tag}>{tag}</li>;
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
          <section className="card-background" key={project.id}>
            <div className="expand"></div>
            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map(tag => {
                  return <li key={tag}>{tag}</li>;
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
