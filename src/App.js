import React from "react";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";

function App() {
  return (
    <body className="container">
      <Section header={<Header title="Weather App" />} form={<Form />} />
      <section id="weather" className="wth_section column hidden">
        <div id="wth_icon" className="wth_icon"></div>
        <div id="temp" className="deg"></div>
        <h2 id="city" className="city"></h2>
        <p id="description" className="descr"></p>
        <div className="details">
          <span id="pressure" className="pressure"></span>
          <span id="wind" className="wind"></span>
        </div>
      </section>
      <section id="error" className="wth_section error hidden"></section>

      <footer className="footer">
        <p>
          <a href=" mailto: nieweglowska.ewelina@gmail.com">
            <img src="/css/images/emailicon.png" width="15px" />
            2022 Created by EN
          </a>
        </p>
      </footer>
    </body>
  );
}

export default App;
