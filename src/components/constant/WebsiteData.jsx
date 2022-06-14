import Community from "../../images/developer/projects/semesterp.jpg";
import Gamehub from "../../images/developer/projects/gamehub.jpg";
import Travels from "../../images/developer/projects/exam.jpg";
import Milky from "../../images/developer/projects/milky.jpg";
import Bergen from "../../images/developer/projects/hotel.jpg";

const websiteProjects = [
  {
    id: 5,
    name: "Holidaze",
    description:
      "My final exam! This is a booking site with both customer and admin sections. Messages, enquiries and hotels is managed in admin section.",

    tags: [
      { name: "WP rest API", id: 7 },
      { name: "Next.js", id: 8 },
      { name: "Styled Components", id: 9 },
    ],
    src: [Bergen],
    weblink: "https://iselin-project-exam2.netlify.app/",
    git: "https://github.com/Iselinklementin/project_exam22",
  },
  {
    id: 4,
    name: "Milky",
    description:
      "We was to create an e-commerce website that has both customer-facing and admin sections, using Strapi API, local storage, Heroku and Cloudinary.",
    tags: [
      { name: "Heroku", id: 7 },
      { name: "JS", id: 8 },
      { name: "Sass", id: 9 },
      { name: "Cloudinary", id: 10 },
    ],
    src: [Milky],
    weblink: "https://iselin-milky.netlify.app",
    git: "https://github.com/Iselinklementin/sp2",
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
    weblink: "https://iselin-haugen-projectexam1-portfolio.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-project-exam-1",
  },
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
    weblink: "https://iselin-haugen-semesterproject1-portfolio21.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-semesterproject1",
  },
  {
    id: 2,
    name: "Gamehub",
    description:
      "Our first project using html / css. We needed to deliver a properly functioning, responsive website for the assignment brief we were given.",
    tags: [{ name: "Plain HTML / CSS", id: 3 }],
    src: [Gamehub],
    weblink: "https://iselin-haugen-gamehub-portfolio21.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-gamehub",
  },
];

export function WebsiteDataMobile() {
  return (
    <>
      {websiteProjects.map((project) => {
        return (
          <section className="card-project card-background-mobile" key={project.id}>
            <a href={project.weblink} target="_blank" rel="noreferrer noopener">
              <div className="open"></div>
            </a>

            <a href={project.git} target="_blank" rel="noreferrer noopener">
              <i className="fab fa-github"></i>
            </a>

            <img src={project.src} alt="" className="project-img" />
            <div className="card-text-wrap">
              <h3 className="card-heading">{project.name}</h3>
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

export function WebsiteDataTablet() {
  return (
    <>
      {websiteProjects.map((project) => {
        return (
          <section className="card-project card-background-tablet" key={project.id + project.name}>
            <div className="card-image-container">
              <img src={project.src} alt="" className="project-img" />
            </div>

            <div className="card-text-container">
              <a href={project.weblink} target="_blank" rel="noreferrer noopener">
                <div className="open"></div>
              </a>

              <a href={project.git} target="_blank" rel="noreferrer noopener">
                <i className="fab fa-github"></i>
              </a>

              <div className="card-text-wrap">
                <div className="circle"></div>
                <h3 className="card-heading">{project.name}</h3>
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
