import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Define __filename and __dirname for compatibility with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the current directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend configurations for Next.js and TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",  // Disable rule for explicit 'any'
      "@typescript-eslint/no-unsafe-function-type": "off",  // Disable rule for unsafe function types
    },
  },
];

export default eslintConfig;
