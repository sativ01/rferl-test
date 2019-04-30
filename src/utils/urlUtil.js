const HASH_VAR = "#tags=";
const DEFAULT_TAGS = ["red", "blue", "purple"];
const DIVIDER = ",";

const getDefaultUrl = () => {
  const url = new URL(window.location.origin);
  url.hash = HASH_VAR + DEFAULT_TAGS.join(DIVIDER);
  return url.href;
};

const DAFAULT_URL = getDefaultUrl();

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

export { DEFAULT_TAGS, DAFAULT_URL, getTagsFromUrl, updateUrlHash };
