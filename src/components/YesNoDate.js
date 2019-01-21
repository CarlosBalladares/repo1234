import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

export const YesNoDate = ({ values, handleChange }) => (
  <FormControl component="fieldset">
    <FormLabel component={InputLabel} shrink="true">
      Select yes or no
    </FormLabel>

    <RadioGroup
      id="yes_no"
      aria-label="yesno"
      name="yesno1"
      value={values.radios.yes_no}
      onChange={handleChange}
      name="radios.yes_no"
    >
      <FormControlLabel value="yes" control={<Radio />} label="yes" />
      <FormControlLabel value="no" control={<Radio />} label="no" />

      {
        (values.radios.date =
          values.radios.yes_no === "no" ? "" : values.radios.date)
      }
    </RadioGroup>

    {values.radios.yes_no === "yes" ? (
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true
        }}
        value={values.radios.date}
        onChange={handleChange}
        name="radios.date"
      />
    ) : (
      ""
    )}
  </FormControl>
);
