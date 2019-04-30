import React from "react";
import "typeface-roboto";
import TagsList from "./tagsList";

import {
  DEFAULT_TAGS,
  DAFAULT_URL,
  getTagsFromUrl,
  updateUrlHash
} from "../utils/urlUtil";

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    const tagsList = getTagsFromUrl();
    if (tagsList && tagsList.length > 0) {
      this.state = {
        tagsList
      };
    } else {
      this.state = {
        tagsList: DEFAULT_TAGS
      };
      window.location.assign(DAFAULT_URL);
    }
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  handleHashChange = () => {
    this.setState({ tagsList: getTagsFromUrl() });
  };

  handleAddTag = tag => {
    const tags = getTagsFromUrl();
    updateUrlHash([...tags, tag]);
  };

  handleRemoveTag = idx => {
    let tags = getTagsFromUrl();
    tags.splice(idx, 1);
    updateUrlHash(tags);
  };

  render() {
    return (
      <>
        <TagsList
          tagsList={this.state.tagsList}
          handleRemoveTag={this.handleRemoveTag}
          handleAddTag={this.handleAddTag}
        />
      </>
    );
  }
}
