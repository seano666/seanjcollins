import React, { useState, useEffect } from "react";
import "./App.scss";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
        //console.log("retreived resume data!");
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
