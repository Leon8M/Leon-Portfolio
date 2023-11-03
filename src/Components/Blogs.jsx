/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Lazy Revolution: How Innovation Shapes Our Lives and Our Laziness",
    description: "Blog on how the rise in technological innovation influences our way of life.",
    url: "https://medium.com/@Leonmunene/the-lazy-revolution-how-innovation-shapes-our-lives-and-our-laziness-5df9239b8cee",
  },
  {
    title:
      "How Software engineers can decrease the chance of ones job being replaced by AI in the near or far future",
    description:
      "Blog on how software engineers can secure their jobs during this technological age.",
    url: "https://medium.com/@Leonmunene/how-software-engineers-can-decrease-the-chance-of-ones-job-being-replaced-by-ai-in-the-near-or-far-4d0fb84dc0a1",
  },
  {
    title: "Nurturing My Love for Science: From Curiosity to Exploration",
    description: "Join me in my journey through science.",
    url: "https://medium.com/@Leonmunene/the-lazy-revolution-how-innovation-shapes-our-lives-and-our-laziness-5df9239b8cee",
  },
  {
    title: "Music, The Beauty of its Existence",
    description: "My love of music personified",
    url: "https://medium.com/@Leonmunene/the-lazy-revolution-how-innovation-shapes-our-lives-and-our-laziness-5df9239b8cee",
  },
];
const Blog = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Blogs</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
