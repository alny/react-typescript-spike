import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import NavLoggedOut from "./NavLoggedOut";
import { fakeAuth } from "src/utils/FakeAuth";
// import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  classes: any;
}

interface State {
  isAuth: boolean;
}

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  handleLogin = () => {
    fakeAuth.authenticate((cb: any) => {
      console.log(this.props);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Mjellow
            </Typography>
            <Link to="/private">
              <Button onClick={() => console.log("Clicked")} color="secondary">
                Private Route
              </Button>
            </Link>
            <NavLoggedOut onClick={this.handleLogin} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(NavContainer);
