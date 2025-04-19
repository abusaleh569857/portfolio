import React from "react";
import Navbar from "../NavBar";
import About from "../About";
import Projects from "../Projects";
import SkillsPage from "../SkillsPage";
import EducationSection from "../EducationSection";
import ExperienceSection from "../ExperienceSection";
import ContactPage from "../ContactPage";
// import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <SkillsPage></SkillsPage>
      <EducationSection></EducationSection>
      <ExperienceSection></ExperienceSection>
      <ContactPage></ContactPage>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default Root;
