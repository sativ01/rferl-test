const HASH_VAR = "#tags=";
const DEFAULT_TAGS = ["red", "blue", "purple"];
const DIVIDER = ",";

const createUrlWithTags = tags => {
  const url = new URL(window.location.origin);
  url.hash = HASH_VAR + tags.join(DIVIDER);
  return tags && tags.length > 0 ? url.href : null;
};

const DAFAULT_URL = createUrlWithTags(DEFAULT_TAGS);

const getTagsFromUrl = () => {
  const hashVal = window.location.hash;
  if (!hashVal.startsWith(HASH_VAR)) {
    return [];
  }
  const tagsStr = hashVal.replace(HASH_VAR, "");
  const tags = tagsStr.length === 0 ? [] : tagsStr.split(DIVIDER);
  return tags;
};

const updateUrlHash = newHash => {
  window.location.href = HASH_VAR + newHash.join(DIVIDER);
};

export default {
  DEFAULT_TAGS,
  DAFAULT_URL,
  getTagsFromUrl,
  updateUrlHash
};
