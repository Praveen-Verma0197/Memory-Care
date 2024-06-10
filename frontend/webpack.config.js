const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  node: "empty",
  devServer: {
    overlay: false,
    contentBase: path.resolve(__dirname, "public"),
    port: 3000,
    open: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
};
