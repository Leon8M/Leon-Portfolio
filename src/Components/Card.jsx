import React from "react";
import port from "../../static/images/port.png"
import tony from "../../static/images/tony.png"
import mamika from "../../static/images/mamika.png"
import mazi from "../../static/images/Home.png"
import url from "../../static/images/url.jpg"
import port2 from "../../static/images/port2.png"



const projectList = [
    {
      title: "My Resume Site",
      description: "This is the Github repo containing all code for this site. Though not responsive, it shows skills in Js among others",
      port_image: port2,
      github: "https://github.com/Leon8M/Portfolio",
      url: "https://github.com/Leon8M/Leon_portfolio_2",
    }, 
    {
      title: "Anthony Njeru's Portfolio",
      description:
        "Portfolio website for a customer, Anthony, who is an auditor. Contains all infomation required for his hiring.",
      port_image: tony,
      github: "https://github.com/Leon8M/Tonnie-Portfolio",
      url: "https://anthonykimathi.netlify.app/",
    },
    {
      title: "Mamika Creations Website",
      description:
        "Website to cater for the business of Mamika Creations, an art company for all things abstract and acrylic.",
      port_image: mamika,
      github: "https://github.com/Leon8M/Mamika",
      url: "https://mamikacreations.netlify.app/",
    },
    {
        title: "My Original Portfolio",
        description: "Github repo containing all the code for my first instance of a Portfolio.",
        port_image: port,
        github: "https://github.com/Leon8M/Tonnie-Portfolio",
      },
    {
      title: "First React Project",
      description: "First react project I did in preparation to join Mazi showing skills in React.js and React Router",
      port_image: mazi,
      github: "https://github.com/Leon8M/Mazi-App",
    },
    {
      title:
        "Url-saver-for chrome",
      description:
        "One of my first Javascript projects implementing my experience in basics of Js and also Dom Manipulation",
      port_image: url,
      github: "https://github.com/Leon8M/Url-saver-for-chrome",
    },
  ];


const Card = () => {
    return (
<div className="cards">
          {projectList.map((project) => (
            <div className="card" key={project.title}>
              
                <img
                src={project.port_image}
                style={{
                height: "90%",
                width: "100%",
                objectFit: "cover",
                animation: "1s ease-out 0s 1 slideIn",
                }}
                alt=""
                />
              <div className="xter">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
               <p className="small">{project.description}</p>
               {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h4>Website</h4>
              </a>
              )}
              <a href={project.github} className="link_git"><h4>Github</h4></a>
              </div>
            </div>
          ))}
        </div>
    );
};

export default Card;