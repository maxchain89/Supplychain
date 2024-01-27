const { execSync } = require("child_process");
module.exports = function (deployer) {
  // Your deployment logic...

  // After deployment logic
  deployer.then(() => {
    execSync("node copyArtifacts.js", { stdio: "inherit" });
  });
};
