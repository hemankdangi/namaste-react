import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, componentname } = this.props;
    return (
      <div>
        <h1>User - {name}</h1>
        <h2>This is {componentname} Component</h2>
      </div>
    );
  }
}
export default UserClass;
