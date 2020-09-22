import React, { useState } from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  const [buttonText, setButtonText] = useState("Click Me!");

  const handleClick = (e) => {
    setButtonText("Thanks!");
  };

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sean Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}, {zip}
                </span>
                <br />

                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <button className="button" onClick={handleClick}>
                  <i className="fa fa-download"></i>
                  {buttonText}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
