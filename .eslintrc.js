module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: "eslint:recommended",
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: [
        "babel.config.js",
        "jest.config.js",
        "webpack.config.js",
        "index.test.js",
      ],
      env: {
        node: true,
      },
    },
  ],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
