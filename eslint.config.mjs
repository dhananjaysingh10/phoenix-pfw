// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// For ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js and TypeScript recommended configs
  ...compat.extends(
    "next/core-web-vitals",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ),
  // Optionally, add Prettier or other configs
  // ...compat.extends("prettier"),
  // Your own rules (optional)
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Allow `any` if you want to avoid errors (not recommended for production)
      "@typescript-eslint/no-explicit-any": "off",
      // Allow unused vars (not recommended for production)
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/await-thenable": "off",

      // Allow console logs
      "no-console": "off",
      // You can add more overrides here as needed
    },
  },
  // General rules for all files (optional)
  {
    rules: {
      // Example: allow all warnings/errors
      "no-warning-comments": "off",
      "no-undef": "off",
    },
  },
];
