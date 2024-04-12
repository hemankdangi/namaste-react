import React from "react";

const User = ({ name, componentname }) => {
  return (
    <div>
      <h1>User - {name}</h1>
      <h2>This is {componentname} Component</h2>
    </div>
  );
};
export default User;
