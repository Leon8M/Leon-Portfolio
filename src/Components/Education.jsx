import React from "react";

const courses = [
  {
    school: "KCA University",
    course: "Applied Computing",
    date: "September 2022 to date",
    description: "Barchelor of Applied Computing",
  },
  {
    school: "ALX Proggramme",
    course: "Software Engineering",
    date: "March 2023 to date",
    description: "All on software enginerring from the renowned ALX programme.",
  },
  {
    school: "Self Study",
    course: "Javascript, HTML5, CSS3 and React.js",
    date: "From November to the end of time",
    description: "I use platforms like Scrimba, Freecodecamp and Youtube to learn.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {courses.map((project) => (
            <div className="box" key={project.school}>
              <h3 style={{ flexBasis: "40px" }}>{project.school}</h3>
              <h4>{project.course}</h4>
              <h6>{project.date}</h6>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
