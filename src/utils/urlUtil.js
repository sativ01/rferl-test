/** Application constatns -- could be later moved to config file */
const HASH_VAR = "#tags=";
const DEFAULT_TAGS = ["red", "blue", "purple"];
const DIVIDER = ",";

/** Returns a default URL according to the assignment */
const getDefaultUrl = () => {
  const url = new URL(window.location.origin);
  url.hash = HASH_VAR + DEFAULT_TAGS.join(DIVIDER);
  return url.href;
};

/** defining default URL */
const DAFAULT_URL = getDefaultUrl();

/**
 * Retrieves values of a hash part of URL and extracts tags
 * @returns {Array[string]} tags to be displayed
 * */
const getTagsFromUrl = () => {
  const hashVal = window.location.hash;
  if (!hashVal.startsWith(HASH_VAR)) {
    return [];
  }
  const tagsStr = hashVal.replace(HASH_VAR, "");
  const tags = tagsStr.length === 0 ? [] : tagsStr.split(DIVIDER);
  return tags;
};

/** Updates current URL hash */
const updateUrlHash = newHash => {
  window.location.href = HASH_VAR + newHash.join(DIVIDER);
};

export { DEFAULT_TAGS, DAFAULT_URL, getTagsFromUrl, updateUrlHash };
