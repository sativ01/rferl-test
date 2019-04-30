import React from "react";
import List from "./List";
import AddTag from "./AddTag";
import PropTypes from "prop-types";

/**
 * Wrapper for List of Tags components
 * @param {} props
 */
const TagsList = props => {
  const { tagsList, handleRemoveTag, handleAddTag } = props;
  return (
    <>
      <List tagsList={tagsList} onRemoveTag={handleRemoveTag} />
      <AddTag onAddTag={handleAddTag} />
    </>
  );
};

TagsList.propTypes = {
  tagsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemoveTag: PropTypes.func.isRequired,
  handleAddTag: PropTypes.func.isRequired
};
export default TagsList;
