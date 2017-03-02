/**
 * 对 req.url 进行裁剪，以便适应不同的发布路径
 */
module.exports = function shareRoot(rootPath) {
  if (rootPath.charAt(rootPath.length - 1) === "/") {
    rootPath = rootPath.substr(0, rootPath.length - 1);
  }

  var ROOT_RE = new RegExp("^" + rootPath);
  return function(req, res, next) {
    req.url = req.url.replace(ROOT_RE, "");
    if (req.url === "") {
      req.url = "/";
    }
    next();
  };
};
