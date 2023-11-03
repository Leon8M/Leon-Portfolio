/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Blog from "./Components/Blogs";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Leon Munene",
  title: "Web Designer & App Dev",
  email: "leonmunene254@gmail.com",
  gitHub: "Leon8M",
  instagram: "",
  linkedIn: "leon-munene-0a49a8238",
  medium: "Leonmunene",
  twitter: "leon_nex",
  youTube: "",
};

const primaryColor = "#0F0509";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main" key={siteProps.name}>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Skills />
      <Blog />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
