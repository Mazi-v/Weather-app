import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="about-container">
        <div className="about-section">
          <h2>About Me</h2>
          <p>
            Hello! I am <strong>Mazie Vafadoost</strong>, a passionate
            Full-stack Software Developer. I specialize in building efficient
            and scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="about-section">
          <h2>PM Accelerator</h2>
          <p>
            The Product Manager Accelerator Program is designed to support PM
            professionals through every stage of their careers. From students
            looking for entry-level jobs to Directors looking to take on a
            leadership role, our program has helped over hundreds of students
            fulfill their career aspirations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
