import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  form: {
    display: "flex"
  },
  button: {
    margin: theme.spacing.unit,
    float: "left"
  }
});

/**
 * @returns {React.Component} containing input field and Add button
 * will execute action passed to *handleSubmit* @property
 */
class AddTag extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /**
   * @returns {boolean} true if inout is invalid
   */
  validateInput = () => {
    return !/^([a-zA-Z0-9]){1,50}$/.test(this.state.value);
  };

  handleSubmit = event => {
    this.props.onAddTag(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          type="text"
          label="New Tag Name"
          error={this.validateInput() && this.state.value.length > 0}
          helperText={
            this.validateInput() ? "Maximum 50 letters/numbers, no spaces" : ""
          }
          value={this.state.value}
          onChange={this.handleChange}
          style={{ flex: 1 }}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.button}
          disabled={this.validateInput()}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(AddTag);
