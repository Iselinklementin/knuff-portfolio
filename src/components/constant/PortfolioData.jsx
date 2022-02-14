import Cinderella from "../../images/design/projects/cinderella.jpg";
import hoytlavt from "../../images/design/projects/h&l.jpg";
import Bjerke from "../../images/design/projects/bjerke.jpg";
import FormatEiendom from "../../images/design/projects/fe.jpg";
import SimpleModal from "../ui/SimpleModal";
import CinderellaBrochure from "../../images/design/projects/modal/cinderella/cinderella-brochure.jpg";
import CinderellaMockup from "../../images/design/projects/modal/cinderella/cinderella-mockup.jpg";
import Posepakker from "../../images/design/projects/modal/cinderella/posephone.jpg";
import FeMagazine from "../../images/design/projects/modal/fe/fe-magazine.jpg";
import BjerkePopup from "../../images/design/projects/modal/bjerke/popup.jpg";
import BjerkeA4 from "../../images/design/projects/modal/bjerke/Bjerke-A4-Flyer.jpg";
import Skagenrore from "../../images/design/projects/modal/bjerke/skagenrore.jpg";
import FeMag from "../../images/design/projects/modal/fe/fe-magazine-1.jpg";
import FeMagBok from "../../images/design/projects/modal/fe/fe-magazine-2.jpg";
import Rollups from "../../images/design/projects/modal/h&l/rollups.jpg";
import hl_flyer from "../../images/design/projects/modal/h&l/h&l-flyer.jpg";
import hl_mac from "../../images/design/projects/modal/h&l/mockup-web.jpg";

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
    modal_text:
      "They have been one of my most loyal, fun and interesting customers. I have been involved in the development of new campaigns, products and designs. I also got to be part of the journey when they were expanding to other countries.",
  },
  {
    id: 2,
    name: "Høyt & Lavt",
    description:
      "In their popular climbing parks, you get mastery and learning in the treetops. Exciting, action-packed activities for all ages and skills.",
    tags: [
      { name: "Rollups", id: 4 },
      { name: "Flyers", id: 5 },
      { name: "Advertising", id: 6 },
    ],
    src: [hoytlavt],
    modal_img_1: [Rollups],
    modal_img_2: [hl_flyer],
    modal_img_3: [hl_mac],
    modal_text:
      "I have been involved in developing flyers, rollups, ads, beach flags, logos, signage, banners and merch. They have several parks across the country and have an exciting concept that it has been a pleasure to be included in.",
  },
  {
    id: 3,
    name: "Bjerke Spekemat",
    description:
      "They produce salads, dressings and coarse pâté as well as many different types of cured meats and cold cuts. They strive to maintain high quality.",
    tags: [
      { name: "Packaging", id: 7 },
      { name: "Brochure", id: 8 },
      { name: "Rollups", id: 9 },
    ],
    src: [Bjerke],
    modal_img_1: [BjerkePopup],
    modal_img_2: [BjerkeA4],
    modal_img_3: [Skagenrore],
    modal_text:
      "It has been exciting to develop packaging designs, store stands, gift boxes and product catalogs for this customer. They have won several medals for the good quality of the products, and I am happy to be able to show it visually.",
  },
  {
    id: 4,
    name: "Format Eiendom",
    description:
      "Format Eiendom is an engineering company that works with development, planning, construction and sale of homes and commercial buildings.",
    tags: [
      { name: "Brochure", id: 10 },
      { name: "Advertising", id: 11 },
      { name: "Logodesign", id: 12 },
    ],
    src: [FormatEiendom],
    modal_img_1: [FeMag],
    modal_img_2: [FeMagazine],
    modal_img_3: [FeMagBok],
    modal_text:
      "I have made several prospectuses for Format Eiendom. They have given me freedom and confidence during the design process, and I have been allowed to participate in design decisions all the way. The collaboration with Format Eiendom has been great, and I appreciate the trust they have given me.",
  },
];

export function PortfolioDataMobile() {
  let count = 0;
  return (
    <>
      {portfolioProjects.map((project) => {
        return (
          <section className="card-project card-background-mobile" key={project.id}>
            <SimpleModal key={project.name}>
              {project.tags.map((tag) => {
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
                <p>{project.modal_text}</p>
              </section>
            </SimpleModal>

            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul key={"mobile" + project.name}>
                {project.tags.map((tag) => {
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
      {portfolioProjects.map((project) => {
        return (
          <section className="card-project card-background-tablet" key={project.id + project.name}>
            <div className="card-image-container">
              <img src={project.src} alt="" className="project-img" />
            </div>

            <div className="card-text-container">
              <SimpleModal key={project.name}>
                {project.tags.map((tag) => {
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
                  <p>{project.modal_text}</p>
                </section>
              </SimpleModal>

              <div className="card-text-wrap">
                <div className="circle"></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul key={"tablet" + project.name}>
                  {project.tags.map((tag) => {
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
