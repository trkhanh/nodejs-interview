module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                ignoreRestSiblings: true,
            },
        ],
        "@typescript-eslint/explicit-function-return-type": ["error", {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true
        }]
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};