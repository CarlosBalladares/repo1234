import React from "react";
import { Form, Text, RadioGroup, Radio } from "informed";
import TextField from "@material-ui/core/Card";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    minWidth: 275
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

class MainForm extends React.Component {
  render() {
    <Card className={classes.card}>Hello</Card>;
  }
}

export default withStyles(styles)(MainForm);
