import * as React from "react";

interface Props {}

class Home extends React.Component<Props> {
  componentDidMount() {
    console.log("HOME Loaded");
  }
  render() {
    return (
      <div>
        <h6>HOME</h6>
      </div>
    );
  }
}

export default Home;
