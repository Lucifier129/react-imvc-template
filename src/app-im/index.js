// routes

export default [
  {
    path: "/im/chat",
    controller: require("./chat/controller")
  },
  {
    path: "/im/list",
    controller: require("./notfound/controller")
  }
];
