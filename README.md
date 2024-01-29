# Supply Chain on Blockchain

Hello! This is my first React.js/Solidity smart contract project. The idea behind this app is to showcase how blockchains can be used to store data for supply chains and how much more secure this can be. You've got your basic CRUD operations where you can add, update, and delete items, along with a few other details you can change.

Feel free to play around with it, but **BE SURE TO ONLY USE TEST ETH FOR THIS APP**!

## Features

- **Create**: Add new items to the supply chain.
- **Read**: View details of existing items.
- **Update**: Change details of the items.
- **Delete**: Remove items from the supply chain.
- **Secure**: All data is stored on the blockchain, ensuring integrity and security.

## Live Demo

Check out the live app: [Supplychain on GitHub Pages](https://maxchain89.github.io/Supplychain/)

View the smart contract on Etherscan: [Supplychain Smart Contract](https://sepolia.etherscan.io/address/0x97972Bd24e7cEee0e35dE6E42c8aa86f70a1D767)

## Setup and Installation

To set up this project for development and testing:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/maxchain89/Supplychain.git
   cd Supplychain/client

2. **Install Dependencies**

   ```bash
   npm install


3. **Set Up Environment Variables**

Create a .env file in the client directory with the necessary variables:

   ```plaintext
   REACT_APP_INFURA_KEY=<YourInfuraKey>
   REACT_APP_CONTRACT_ADDRESS=<DeployedContractAddress>

Note: Replace <YourInfuraKey> with your Infura project key and <DeployedContractAddress> with the address of the deployed smart contract.

Run the Application Locally

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Connect MetaMask
Before interacting with the app, make sure to connect your MetaMask wallet using an account with Sepolia test ETH. All changes are reflected on the blockchain and can be verified through Sepolia Etherscan.

Feedback
Please let me know what you think of the app or if you have any suggestions:

Email: maxevans156@gmail.com
LinkedIn: Max Evans
GitHub: maxchain89
