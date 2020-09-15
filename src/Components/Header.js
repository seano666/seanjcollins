import React, { Component } from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  if (data) {
    var project = data.project;
    var github = data.github;
    var name = data.name;
    var description = data.description;
    //  var city = data.address.city;
    //  var networks = data.social.map(function (network) {
    //    return (
    //      <li key={network.name}>
    //        <a href={network.url}>
    //          <i className={network.className}></i>
    //        </a>
    //      </li>
    //    );
    //  });
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
          <h1 className="responsive-headline">{name}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
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
