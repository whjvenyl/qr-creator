/** @type {import("prettier").Config} */
const config = {
  // General formatting options
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // JSX specific options
  jsxSingleQuote: false,

  // HTML specific options
  htmlWhitespaceSensitivity: 'css',

  // Markdown specific options
  proseWrap: 'preserve',

  // Don't require or insert @format pragma
  requirePragma: false,
  insertPragma: false,

  // Plugins for additional language support
  plugins: [],

  // Overrides for specific file types
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80
      }
    }
  ]
};

export default config;
