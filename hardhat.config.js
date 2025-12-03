require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    helios: {
      url: process.env.HELIOS_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
