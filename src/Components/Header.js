import React from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  if (data) {
    var linkedin = data.linkedin;
    var github = data.github;
    var description = data.description;
    var title = data.title;
    var stackoverflow = data.stackoverflow;
  }

  return (
    <header id="home">
      <ParticlesBg type="lines" num="20" bg={true} color="#f2eaec" />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{title}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
            <a
              href={linkedin}
              className="button btn project-btn"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
            <a href={github} className="button btn github-btn" target="_blank">
              <i className="fa fa-github"></i>Github
            </a>
            <a
              href={stackoverflow}
              className="button btn so-btn"
              target="_blank"
            >
              <i className="fa fa-stack-overflow"></i>StackOverflow
            </a>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
