import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

// Use FlatCompat to convert the Next.js eslintrc-style config to flat config
const nextConfig = compat.config({
  extends: ["next/core-web-vitals"],
});

export default tseslint.config(
  // Extract the rules from the Next.js config
  ...nextConfig,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...compat.extends("plugin:drizzle/recommended"),
  {
    files: ["**/*.{ts, js, tsx, jsx}"],
    ignores: [".next", "node_modules", "dist", "build"],
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
      "drizzle/enforce-delete-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
      "drizzle/enforce-update-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
