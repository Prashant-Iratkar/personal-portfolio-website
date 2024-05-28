import React from "react";
import "./Education.css"
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container ed" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ed-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.degree}</h2>
                  <h3>{data.university}</h3>
                  <h4>{data.endDate}</h4>
                  <h5>{data.cgpa}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
