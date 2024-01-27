/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Hands-off deployment with Infura
 * --------------------------------
 *
 * Do you have a complex application that requires lots of transactions to deploy?
 * Use this approach to make deployment a breeze 🏖️:
 *
 * Infura deployment needs a wallet provider (like @truffle/hdwallet-provider)
 * to sign transactions before they're sent to a remote public node.
 * Infura accounts are available for free at 🔍: https://infura.io/register
 *
 * You'll need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. You can store your secrets 🤐 in a .env file.
 * In your project root, run `$ npm install dotenv`.
 * Create .env (which should be .gitignored) and declare your MNEMONIC
 * and Infura PROJECT_ID variables inside.
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status 🤔?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

const { execSync } = require("child_process");

const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config(); // To keep your mnemonic and private key safe

// First ensure you set your mnemonic as an environment variable
const mnemonic = process.env.MNEMONIC;
const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL;
const accountIndex = 1;

module.exports = {
  networks: {
    // ... other network configs

    sepolia: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: sepoliaRpcUrl,
          numberOfAddresses: 1, // You can specify the number of addresses to derive
          shareNonce: true, // Use a shared nonce across all derived accounts
          derivationPath: "m/44'/60'/0'/0/", // Standard Ethereum derivation path
          index: accountIndex, // The index of the account to use
        }),
      network_id: 11155111, // Sepolia's network id
      gas: 5500000, // Gas limit used for deploys
      confirmations: 2, // # of confirmations to wait between deployments
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  }, // If you have other plugins, keep them
  hooks: {
    // Hook to run after migrations
    afterMigrate: async (config) => {
      // Use execSync to run your Node.js script
      execSync("node copyArtifacts.js", { stdio: "inherit" });
    },
  },
};
