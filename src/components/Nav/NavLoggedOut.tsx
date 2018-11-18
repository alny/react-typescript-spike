import * as React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  onClick?: React.MouseEventHandler<any>;
}

class NavLoggedOut extends React.Component<Props> {
  render() {
    return (
      <Button color="inherit" onClick={this.props.onClick}>
        Login
      </Button>
    );
  }
}

export default NavLoggedOut;
