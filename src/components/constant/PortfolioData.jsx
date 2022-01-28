import Cinderella from "../../images/design/projects/cinderella.jpg";
import Subway from "../../images/design/projects/Subwayvk.jpg";
import Bjerke from "../../images/design/projects/bjerke.jpg";
import FormatEiendom from "../../images/design/projects/fe.jpg";
import SimpleModal from "../ui/SimpleModal";
import CinderellaBrochure from "../../images/design/projects/modal/cinderella/cinderella-brochure.jpg";
import CinderellaMockup from "../../images/design/projects/modal/cinderella/cinderella-mockup.png";
import Posepakker from "../../images/design/projects/modal/cinderella/Posepakker.png";
import FeMagazine from "../../images/design/projects/modal/fe/fe-magazine.jpg";

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
    modal_img_1: [CinderellaBrochure],
    modal_img_2: [CinderellaMockup],
    modal_img_3: [Posepakker],
  },
  {
    id: 2,
    name: "Subway",
    description:
      "SUBWAY the world’s largest sandwich chain with more than 44,000 outlets around the world. They deliver quick, nutritious meals.",
    tags: [
      { name: "Business Cards", id: 4 },
      { name: "Tags", id: 5 },
      { name: "Advertising", id: 6 },
    ],
    src: [Subway],
    modal_img_1: [CinderellaBrochure],
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
    modal_img_1: [CinderellaBrochure],
  },
  {
    id: 4,
    name: "Format Eiendom",
    description:
      "Format Eiendom is an engineering company that works with development, planning, construction and sale of homes and commercial buildings.",
    tags: [
      { name: "Advertising", id: 10 },
      { name: "Brochure", id: 11 },
      { name: "Logodesign", id: 12 },
    ],
    src: [FormatEiendom],
    modal_img_1: [FeMagazine],
  },
];

export function PortfolioDataMobile() {
  let count = 0;
  return (
    <>
      {portfolioProjects.map(project => {
        return (
          <section className="card-project card-background-mobile" key={project.id}>
            <SimpleModal key={project.name}>
              {project.tags.map(tag => {
                count++;
                if (count === 1 || count === 4 || count === 7 || count === 10) {
                  return (
                    <h3 className="modal-heading" key={tag.id}>
                      {tag.name}
                    </h3>
                  );
                }
              })}
              <div className="modal-icon"></div>
              <div className="modal-image-wrapper">
                <figure className="header-img">
                  <img src={project.modal_img_1} alt="" className="modal-img" />
                </figure>

                <figure className="modal-images-container">
                  <img src={project.modal_img_2} alt="" className="modal-img img-two" />
                  <img src={project.modal_img_3} alt="" className="modal-img img-three" />
                </figure>
              </div>

              <section className="modal-text">
                <h2>{project.name}</h2>
                <p>
                  Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus quam,
                  sollicitudin posuere massa lacus cursus ligula. Quisque vel turpis a quam posuere
                  lobortis. Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus quam.
                  Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus quam,
                  sollicitudin posuere massa lacus cursus ligula.
                </p>
              </section>
            </SimpleModal>

            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul key={"mobile" + project.name}>
                {project.tags.map(tag => {
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
  let count = 0;
  return (
    <>
      {portfolioProjects.map(project => {
        return (
          <section className="card-project card-background-tablet" key={project.id + project.name}>
            <div className="card-image-container">
              <img src={project.src} alt="" className="project-img" />
            </div>

            <div className="card-text-container">
              <SimpleModal key={project.name}>
                {project.tags.map(tag => {
                  count++;
                  if (count === 1 || count === 4 || count === 7 || count === 10) {
                    return (
                      <h3 className="modal-heading" key={tag.id}>
                        {tag.name}
                      </h3>
                    );
                  }
                })}
                <div className="modal-icon"></div>
                <div className="modal-image-wrapper">
                  <figure className="header-img">
                    <img src={project.modal_img_1} alt="" className="modal-img" />
                  </figure>

                  <figure className="modal-images-container">
                    <img src={project.modal_img_2} alt="" className="modal-img img-two" />
                    <img src={project.modal_img_3} alt="" className="modal-img img-three" />
                  </figure>
                </div>

                <section className="modal-text">
                  <h2>{project.name}</h2>
                  <p>
                    Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus quam,
                    sollicitudin posuere massa lacus cursus ligula. Quisque vel turpis a quam
                    posuere lobortis. Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
                    faucibus quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
                    turpis a quam posuere lobortis.
                  </p>
                </section>
              </SimpleModal>

              <div className="card-text-wrap">
                <div className="circle"></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul key={"tablet" + project.name}>
                  {project.tags.map(tag => {
                    return <li key={tag.id}>{tag.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
