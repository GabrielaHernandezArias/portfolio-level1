/*
We have a page for each of these sections
(figma link)
*/
import React from "react";
import AboutSection from "../components/AboutSection";

/*
AboutUs is a react functional component (a component defined as a JavaScript function)
so we assigned AboutUs the value of an arrow function
inside the component, we're returning a JSX element (in this case, "AboutSection")
*/
const AboutUs = () => {
  return (
    <div>
      <AboutSection />
    </div>
  );
};

export default AboutUs;
