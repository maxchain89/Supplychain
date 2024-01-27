const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, './build/contracts/SupplyChain.json');
const destPath = path.join(__dirname, '../client/src/contracts/SupplyChain.json');

fs.copyFileSync(srcPath, destPath);
console.log('Contract ABI copied to client application.');
