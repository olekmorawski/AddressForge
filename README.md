![AddresForge logo](http://zkgreeter.j.pl/AddresForgeLogo-removebg-preview.png)

AddressForge is a Web App that lets you create Ethereum smart contracts at specific addresses with leading zeros or custom patterns. This can lower your gas costs or improve your address aesthetics.

## Features

- User-friendly interface that is easy to use right away.
- Optimized to find the desired address with minimal effort and time.
- Uses Golem Network, a decentralized platform that provides computing power for finding the specific addresses you want.

## How to use

To use AddressForge, you need to:

- Activate and connect a plugin and select whether you want to reduce gas costs or edit the address of your contract.
- Set the number of leading zeros or the custom pattern (with '0x' prefix) you want in your contract address, up to 20 hexadecimal only.
- Enter the address of the deployer account that will create the contract.
- The connected wallet will be charged for the transaction fees and the Golem Network fees. You will need to have some GLM tokens in your wallet to use the Golem Network service and the native token of the blockchain on which you deploy the contract.
- Start the process of finding and deploying your contract. AddressForge will use the Golem Network to generate and test many addresses until it finds one that matches your criteria. It will then deploy the contract to that address and show you the result. You can check and use your contract on Ethereum.

## Frontend Technologies

- ![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg) [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- ![Vite Logo](https://vitejs.dev/logo.svg) [Vite](https://vitejs.dev/) - Fast and efficient build tool for web apps.
- ![SASS Logo](https://sass-lang.com/assets/img/logos/logo.svg) [SASS](https://sass-lang.com/) - A powerful CSS preprocessor for styling.
- ![MetaMask Logo](https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg) [Metamask](https://metamask.io/) - A cryptocurrency wallet and gateway to blockchain apps.

## Backend Technologies

- ![Express.js Logo](https://expressjs.com/images/favicon.png) [Express.js](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js.
- ![Solidity Logo](https://intellipaat.com/mediaFiles/2019/02/Solidity-Logo.jpg) [Solidity](https://github.com/ethereum/solidity) - Solidity is an object-oriented, high-level language for implementing smart contracts on various blockchain platforms.
- ![Golem Network Logo](https://golem.network/logo.png) [Golem Network](https://golem.network/) - A decentralized computation network.

## Libraries

- [axios](https://axios-http.com/) - Promise-based HTTP client for making API requests.
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://github.com/expressjs/cors) - Middleware for enabling CORS in Express applications.
- [uuid](https://github.com/uuidjs/uuid) - Library for generating and working with UUIDs.
- [nodemon](https://github.com/remy/nodemon) - Utility for monitoring changes and automatically restarting the server.
- [wagmi](https://wagmi.sh/) - A set of React Hooks for Web3.

## Getting Started

### Installation

1. Clone this repository: `git clone https://github.com/olekmorawski/AddressForge`
2. Navigate to the project directory: `cd AddressForge`
3. Install frontend dependencies: `npm install`

### Usage

1. Start the frontend development server: `npm run dev`
2. Open your web browser and navigate to the provided Vite URL: `http://localhost:XXXX`

## Contributors

- Aleksander Morawski
- Krzysztof Wesołek
- Franek Krawczyk
- Kamil Bandzwołek
- Jakub Skwierawski

## License

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).
