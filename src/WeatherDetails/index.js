import React from "react";
import "./style.css";

const WeatherDetails = () => (
  <section id="weather" class="wth_section column hidden">
    <div id="wth_icon" class="wth_icon"></div>
    <div id="temp" class="deg"></div>
    <h2 id="city" class="city"></h2>
    <p id="description" class="descr"></p>
    <div class="details">
      <span id="pressure" class="pressure"></span>
      <span id="wind" class="wind"></span>
    </div>
  </section>
);

export default WeatherDetails;
