import React from "react";
import "typeface-roboto";
import TagsList from "./tagsList";

import {
  DEFAULT_TAGS,
  DAFAULT_URL,
  getTagsFromUrl,
  updateUrlHash
} from "../utils/urlUtil";

/**
 * Main Application to display Tag Items taken from URL hash
 * If no tags available in the hash section -- default values will be displayed
 * Will display the list 3 times as per assignment
 * This component handles data flow. URL is the source of truth
 * @returns {React.Component}
 */
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

  /** Subscribe to hash-change event on the page */
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
        <TagsList
          tagsList={this.state.tagsList}
          handleRemoveTag={this.handleRemoveTag}
          handleAddTag={this.handleAddTag}
        />
        <TagsList
          tagsList={this.state.tagsList}
          handleRemoveTag={this.handleRemoveTag}
          handleAddTag={this.handleAddTag}
        />
      </>
    );
  }
}
