import React from "react";
import "./Home.css";
import pdf from "../pdf/Prashant Iratkar.pdf.pdf";
import hero from "./data/hero.json";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1>
            Hello, I Am Prashant Iratkar. Welcome To My Profile, I Am FrontEnd
            Developer(React.Js)
          </h1>

          <a
            href={pdf}
            download="Prashant Iratkar.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
