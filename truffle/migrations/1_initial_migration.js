const SupplyChain = artifacts.require("SupplyChain");
const { execSync } = require("child_process");

module.exports = function (deployer) {
  deployer.deploy(SupplyChain);
  deployer.then(() => {
    execSync("node copyArtifacts.js", { stdio: "inherit" });
  });
};
