import Community from "../../images/developer/projects/semesterp.jpg";
import Gamehub from "../../images/developer/projects/gamehub.jpg";
import Travels from "../../images/developer/projects/exam.jpg";
import Milky from "../../images/developer/projects/milky.jpg";

const websiteProjects = [
  {
    id: 1,
    name: "Community Science Museum",
    description:
      "Semester Project our first year was for a science museum. It needed to be a website that was informative and appealing to kids.",
    tags: [
      { name: "Javascript", id: 1 },
      { name: "CSS", id: 2 },
    ],
    src: [Community],
  },
  {
    id: 2,
    name: "Gamehub",
    description:
      "Our first project using html / css. We needed to deliver a properly functioning, responsive website for the assignment brief we were given.",
    tags: [{ name: "Plain HTML / CSS", id: 3 }],
    src: [Gamehub],
  },
  {
    id: 3,
    name: "Explore Travels",
    description:
      "This was our exam the first year. We were asked to create a blog site, using Wordpress API. We needed to include comments, filter and searchbar.",
    tags: [
      { name: "Javascript", id: 4 },
      { name: "CSS", id: 5 },
      { name: "Wordpress API", id: 6 },
    ],
    src: [Travels],
  },
  {
    id: 4,
    name: "Milky",
    description:
      "Semester Project our second year was to create an e-commerce website that has both customer-facing and admin sections, using Strapi API, local storage, Heroku, Cloudinary and Sass.",
    tags: [
      { name: "Heroku", id: 7 },
      { name: "JS", id: 8 },
      { name: "Sass", id: 9 },
      { name: "Cloudinary", id: 10 },
    ],
    src: [Milky],
  },
];

export function WebsiteDataMobile() {
  console.log(websiteProjects);
  return (
    <>
      {websiteProjects.map(project => {
        return (
          <section className="card-project card-background-mobile" key={project.id}>
            <i className="fas fa-external-link-alt"></i>
            <i className="fab fa-github"></i>

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

export function WebsiteDataTablet() {
  return (
    <>
      {websiteProjects.map(project => {
        return (
          <section className="card-project card-background-tablet" key={project.id + project.name}>
            <div className="card-image-container">
              <img src={project.src} alt="" className="project-img" />
            </div>

            <div className="card-text-container">
              <i className="fas fa-external-link-alt"></i>
              <i className="fab fa-github"></i>

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
