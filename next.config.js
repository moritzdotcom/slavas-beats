/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ALCHEMY_KEY: process.env.ALCHEMY_KEY,
    BLOCKCHAIN_NAME: process.env.BLOCKCHAIN_NAME,
    SMART_CONTRACT_ADDRESS: process.env.SMART_CONTRACT_ADDRESS,
    USDC_DECIMALS: process.env.USDC_DECIMALS,
  },
};

module.exports = nextConfig;
