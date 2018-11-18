import * as React from "react";

interface Props {}

class NavLoggedIn extends React.Component<Props> {
  componentDidMount() {
    console.log("Private Loaded");
  }
  render() {
    return (
      <div>
        <h6>PRIVATE</h6>
      </div>
    );
  }
}

export default NavLoggedIn;
