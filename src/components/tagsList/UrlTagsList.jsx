import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

/**
 * Component displays items, passed with *tagsList* in props
 * Each item will execute action passed with *onRemoveTag* in props
 * @returns {React.Component}
 */
const UrlTagsList = ({ tagsList, onRemoveTag }) => {
  const renderTagList = () => {
    if (tagsList.length > 0)
      return (
        <List>
          {tagsList.map((tag, idx) => (
            <ListItem button key={tag + idx} onClick={() => onRemoveTag(idx)}>
              <ListItemText primary={tag} />
            </ListItem>
          ))}
        </List>
      );
  };

  const renderNoList = <Typography variant="h6">No tags ¯\_(ツ)_/¯</Typography>;
  return (
    <>
      <Typography variant="h6">Tags list</Typography>
      {!!tagsList && tagsList.length > 0 ? renderTagList() : renderNoList}
    </>
  );
};

export default UrlTagsList;
