import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <p className="info_txt" id="info_txt">
      Please enter a valid city name
    </p>
    <input
      className="form_location"
      type="text"
      placeholder="Please enter a city"
      id="cityinput"
    />
    <input
      className="form_button"
      type="submit"
      name="search"
      value="Search"
      id="add"
    />
    <div className="separator"></div>
    <button className="form_button" id="button_loc">
      Use My Location
    </button>
  </form>
);

export default Form;
