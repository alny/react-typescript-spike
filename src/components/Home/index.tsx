import * as React from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  withStyles
} from "@material-ui/core";

interface Props {
  classes: any;
}

const styles = {
  card: {
    minWidth: 275,
    margin: 50
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Index extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be lent
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be lent
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be lent
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Index);
