import React from "react";
import "./style.css";

const Section = ({ header, form }) => (
  <section className="search column">
    {header}
    {form}
  </section>
);
export default Section;
