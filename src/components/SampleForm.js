import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { isAlpha, isPositive } from "../utils/Validation";
import Typography from "@material-ui/core/Typography";

import { withFormik } from "formik";
import { YesNoDate } from "./YesNoDate";

// import Table from "./Table";

const DisplayFormikState = props => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }} />
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem"
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

const columns = [
  {
    title: "Name",
    width: 120,
    data: "name"
  },
  {
    title: "Nickname",
    width: 180,
    data: "nickname"
  }
];

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      multiline: "Controlled",
      currency: "EUR",
      budget: "",
      selected: "placeholder"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return event => {
      console.log(name);
      if (name === "budget" && event.target.value < 0) return;
      this.setState({
        [name]: event.target.value
      });
    };
  }

  render() {
    // const { classes } = this.props;

    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    console.log(this.props.validateForm);

    return (
      <Card style={{ width: "100%", padding: "20px" }}>
        <Typography component="h5" variant="h5" gutterBottom>
          Example with forms
        </Typography>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField
                id="budget"
                label="Budget"
                value={values.budget}
                onChange={handleChange}
                type="number"
                min={0}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{ min: 0 }}
                onBlur={handleBlur}
                margin="normal"
                name="budget"
                error={errors.budget}
                fullWidth
              />
              {errors.budget ? (
                <FormHelperText error id="component-error-text">
                  {errors.budget}
                </FormHelperText>
              ) : (
                ""
              )}
              <TextField
                id="standard-name"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Placeholder"
                value={values.name}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                error={errors.name}
                name="name"
                fullWidth
              />
              {errors.name ? (
                <FormHelperText error id="component-error-text">
                  {errors.name}
                </FormHelperText>
              ) : (
                ""
              )}
              <FormControl>
                <InputLabel
                  htmlFor="age-helper"
                  shrink="true"
                  error={errors.selected}
                >
                  Select
                </InputLabel>
                <Select
                  error={errors.selected}
                  id="select"
                  label="Select one option"
                  value={values.selected}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  input={<Input name="age" id="age-helper" />}
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="selected"
                  fullWidth
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                {errors.selected ? (
                  <FormHelperText error id="component-error-text">
                    {errors.selected}
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
              <YesNoDate {...this.props} />
              <Button color="primary" component="button" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </CardContent>

        <DisplayFormikState {...this.props} />

        {/* <Table names={values.table} /> */}
      </Card>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    budget: "",
    name: "",
    selected: "",
    radios: { yes_no: "", date: "" },
    table: []
  }),
  validateOnChange: false,
  validateOnBlur: false,
  validate: (values, touched) => {
    const errors = {};
    console.log(touched);

    if (values.budget < 1) {
      errors.budget = "Select a positive budget";
      // setValidating(true);
    }

    if (!isAlpha(values.name)) {
      errors.name = "Names only include alphabetic chars";
    }

    if (values.selected === "") {
      errors.selected = "Please select an option";
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm"
})(SampleForm);
