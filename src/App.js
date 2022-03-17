import React from "react";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import WeatherDetails from "./WeatherDetails";
import ErrorBox from "./ErrorBox";
import Footer from "./Footer";

function App() {
  return (
    <body className="container">
      <Section header={<Header title="Weather App" />} form={<Form />} />
      <WeatherDetails />
      <ErrorBox />
      <Footer />
    </body>
  );
}

export default App;
