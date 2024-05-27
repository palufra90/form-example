module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    camelcase: ["error", { properties: "always" }],
    "computed-property-spacing": [2, "never"],
    curly: 2,
    "eol-last": 0,
    eqeqeq: [2, "smart"],
    "keyword-spacing": [2, { before: true, after: true }],
    "max-depth": [1, 3],
    "max-len": [1, 120],
    "max-statements": [1, { max: 50 }, { ignoreTopLevelFunctions: true }],
    "new-cap": 0,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "no-console": 0,
    "no-unused-vars": ["error", { args: "none" }],
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "always"],
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "space-unary-ops": 2,
    strict: ["error", "global"],
    "require-atomic-updates": 0,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      settings: {
        react: {
          version: "detect",
        },
      },
      parser: "@typescript-eslint/parser", // Specifies the ESLint parser
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "array-bracket-spacing": [2, "never"],
        "block-scoped-var": 2,
        "brace-style": [2, "1tbs"],
        camelcase: 1,
        "computed-property-spacing": [2, "never"],
        curly: 2,
        eqeqeq: [2, "smart"],
        "keyword-spacing": [2, { before: true, after: true }],
        "max-depth": [1, 3],
        "max-len": [1, 150],
        "new-cap": 0,
        "no-extend-native": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-trailing-spaces": 2,
        "no-use-before-define": [2, "nofunc"],
        "object-curly-spacing": [2, "always"],
        quotes: [
          2,
          "single",
          { avoidEscape: true, allowTemplateLiterals: true },
        ],
        semi: ["error", "always"],
        "space-unary-ops": 2,
        strict: ["error", "global"],
        "require-atomic-updates": 0,
      },
    },
    {
      files: ["*.astro"],
      plugins: ["astro"],
      parser: "astro-eslint-parser",
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "max-len": 0,
        "astro/no-conflict-set-directives": 0,
      },
    },
  ],
};
