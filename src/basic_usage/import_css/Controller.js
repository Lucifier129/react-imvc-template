import Controller from "react-imvc/controller";
import View from "./View";

export default class ImportCSS extends Controller {
  /**
 * 用 preload 属性指定需要预加载的 css 文件
 * 可以动态地构造出来
 */
  preload = {
    base: "/basic_usage/import_css/css/base.css",
    [this.location.query.color || 'red']: getCssByColor(this.location.query.color)
  };
  View = View;
}

const whileList = ["red", "blue"];
function getCssByColor(color) {
  if (whileList.includes(color)) {
    return `/basic_usage/import_css/css/${color}.css`;
  }
  return `/basic_usage/import_css/css/red.css`;
}
