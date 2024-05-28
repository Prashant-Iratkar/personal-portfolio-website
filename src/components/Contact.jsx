import React from "react";
import "./Contact.css";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="contact-icon1">
            <div className="items-c">
              <IoCallSharp className="icons" /> 7219565465 / 7499294824
            </div>
            <div className="items-c">
              <MdMailOutline className="icons" /> prashantiratkar@gmail.com
            </div>
          </div>
          <div className="contact-icon2">
            <div className="items-c">
              <FaLinkedinIn className="icons" />{" "}
              www.linkedin.com/in/prashant-iratkar-a6b95a277
            </div>
            <div className="items-c">
              <MdOutlineLocationOn className="icons" />{" "}
              Hadapsar,Pune,Maharashtra
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
