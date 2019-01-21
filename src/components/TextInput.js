import React from "react";

import TextField from "@material-ui/core/TextField";

import withFormik from "./withFormik";

const FormikOptions = {};

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat in the Hat",
      age: "",
      multiline: "Controlled",
      currency: "EUR"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      name: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <TextField
        id="standard-name"
        label="Name"
        onChange={this.handleChange}
        value={this.state.name}
        margin="normal"
      />
    );
  }
}

export default withFormik(FormikOptions)(TextInput);
