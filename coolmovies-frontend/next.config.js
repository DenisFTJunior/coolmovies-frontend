const path = require("path");
const { parsed: localEnv } = require("dotenv").config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `.env`),
});

const nextConfig = {
  env: localEnv,
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:5000/graphql",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
