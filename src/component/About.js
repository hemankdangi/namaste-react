import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React web series</h2>
      <User name={"Hemank Dangi"} componentname={"Functional"} />

      <UserClass name={"HEmank DANgi"} componentname={"ClassBase"} />
    </div>
  );
};

export default About;
