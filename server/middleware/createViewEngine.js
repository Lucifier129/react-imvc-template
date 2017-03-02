import fs from "fs";

const PLACEHOLDER = /{{\s*([^\s]+)\s*}}/g;
const cache = {};

export default function createViewEngine(settings) {
  const {
    defaults = {}
  } = settings;

  function viewEngine(filePath, options, callback) {
    const data = Object.assign({}, defaults, options);
    const replacement = (_, key) => toString(key, data);

    if (
      process.env.NODE_ENV === "production" && cache.hasOwnProperty(filePath)
    ) {
      const rendered = cache[filePath].replace(PLACEHOLDER, replacement);
      callback(null, rendered);
      return;
    }

    fs.readFile(filePath, function(error, content) {
      if (error) {
        return callback(new Error(error));
      }
      const template = cache[filePath] = content.toString();
      const rendered = template.replace(PLACEHOLDER, replacement);
      callback(null, rendered);
    });
  }

  return viewEngine;
}

function toString(key, data) {
  let isPath = key.indexOf(".") !== -1;
  let value = !isPath
    ? data[key]
    : key.split(".").reduce((result, name) => result[name], data);
  switch (typeof value) {
    case "function":
      return value(data, key);
    case "string":
    case "number":
      return value;
    default:
      return JSON.stringify(value);
  }
  return value || "";
}
