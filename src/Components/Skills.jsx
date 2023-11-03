import React from "react";

const skills = [
  {
    skill: "HTML5",
  },
  {
    skill: "CSS3",
  },
  {
    skill: "Javascript",
  },
  {
    skill: "Git",
  },
  {
    skill: "Python",
  },
  {
    skill: "React.js",
  },
];

const Skills = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Skills</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {skills.map((project) => (
            <div className="box" key={project.skill}>
              <h3 style={{ flexBasis: "40px" }}>{project.skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
