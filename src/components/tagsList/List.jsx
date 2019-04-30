import React from "react";

const List = ({ tagsList, onRemoveTag }) => {
  const renderTagList = () => {
    if (tagsList.length > 0)
      return (
        <ul>
          {tagsList.map((tag, idx) => (
            <li key={tag + idx} onClick={() => onRemoveTag(idx)}>
              {tag}
            </li>
          ))}
        </ul>
      );
  };

  const renderNoList = <h3>No tags ¯\_(ツ)_/¯</h3>;
  return (
    <>
      <h3>Tags list</h3>
      {!!tagsList && tagsList.length > 0 ? renderTagList() : renderNoList}
    </>
  );
};

export default List;
