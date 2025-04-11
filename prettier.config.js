/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cva", "cn"],
  tailwindAttributes: ["className", "class"],
  printWidth: 120,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  semi: true,
};
