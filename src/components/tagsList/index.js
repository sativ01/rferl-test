import React from "react";
import UrlTagsList from "./UrlTagsList";
import AddTag from "./AddTag";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

/**
 * Wrapper for List of Tags components
 * @param {} props
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
    marginTop: "1em"
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
        <Grid item xs={8}>
          <Paper className={classes.addTag}>
            <AddTag onAddTag={handleAddTag} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

TagsList.propTypes = {
  tagsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemoveTag: PropTypes.func.isRequired,
  handleAddTag: PropTypes.func.isRequired
};
export default withStyles(styles)(TagsList);
