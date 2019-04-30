import React from "react";
import UrlTagsList from "./UrlTagsList";
import AddTag from "./AddTag";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

/**
 * Wrapper for List of Tags components
 * @returns {React.Component}
 */
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  tagsList: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "1em"
  },
  addTag: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "1em",
    width: "100%"
  }
});

const TagsList = props => {
  const { tagsList, handleRemoveTag, handleAddTag, classes } = props;
  return (
    <Grid
      container
      spacing={0}
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={8}>
        <Paper className={classes.tagsList}>
          <UrlTagsList tagsList={tagsList} onRemoveTag={handleRemoveTag} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.addTag}>
          <AddTag onAddTag={handleAddTag} />
        </Paper>
      </Grid>
    </Grid>
  );
};

TagsList.propTypes = {
  /** List of tags to be displayed */
  tagsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Action executed when list item is pressed */
  handleRemoveTag: PropTypes.func.isRequired,
  /** Action executed when Add button is pressed */
  handleAddTag: PropTypes.func.isRequired
};
export default withStyles(styles)(TagsList);
