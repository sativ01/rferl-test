import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit,
    float: "right"
  }
});
class AddTag extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  // TODO: validate input
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
          helperText="Maximum 50 letters/numbers"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.button}
          disabled={!/^([a-zA-Z0-9]){1,50}$/.test(this.state.value)}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(AddTag);
