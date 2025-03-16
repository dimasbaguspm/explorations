import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint, { configs } from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  configs.strict,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      "import/order": [
        "error",
        {
          groups: ["type", "builtin", "external", "parent", "sibling", "index"],
          alphabetize: { order: "asc" },
          "newlines-between": "always-and-inside-groups",
        },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  eslintPluginPrettierRecommended,
);
