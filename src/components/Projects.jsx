import React from "react";
import "./Projects.css"
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {project.map((data) => (
            <>
              <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgb(101,175,10,0.5)",
                  }}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-item-center p-3">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "180px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-4">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
