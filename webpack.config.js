const path = require("path");

module.exports = function () {
  return {
    entry: path.resolve("./src/solution.ts"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "my-first-webpack.bundle.js",
    },
    mode:"production",
    module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
  };
}
