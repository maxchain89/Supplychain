const fs = require("fs");
const path = require("path");

const contractsBuildDir = path.join(__dirname, "build/contracts");
const clientContractsDir = path.join(__dirname, "../client/src/contracts");

if (!fs.existsSync(clientContractsDir)) {
  fs.mkdirSync(clientContractsDir, { recursive: true });
}

fs.readdirSync(contractsBuildDir).forEach((file) => {
  if (path.extname(file) === ".json") {
    fs.copyFileSync(
      path.join(contractsBuildDir, file),
      path.join(clientContractsDir, file)
    );
  }
});

console.log("Contract artifacts copied to client directory.");
