<img src="http://zkgreeter.j.pl/AddresForgeLogo-removebg-preview.png" alt="AddresForge logo">

AddressForge is a Web App that lets you create Ethereum smart contracts at specific addresses with leading zeros or custom patterns. This can lower your gas costs or improve your address aesthetics.

## Features

- User-friendly interface that is easy to use right away.
- Optimized to find the desired address with minimal effort and time.
- Uses Golem Network, a decentralized platform that provides computing power for finding the specific addresses you want.

## How to use

To use AddressForge, you need to:

- Activate and commect plug-in and select whether you want to reduce gas costs or edit the address of your contract.
- Set the number of leading zeros or the custom pattern (with '0x' prefix) you want in your contract address, up to 20 hexadecimals only.
- Enter the address of the deployer account that will create the contract.
- Connected wallet will be charged for the transaction fees and the Golem Network fees. You will need to have some GLM tokens in your wallet to use the Golem Network service and native token of blochkchain on witch You deploy contract.
- Start the process of finding and deploying your contract. AddressForge will use the Golem Network to generate and test many addresses until it finds one that matches your criteria. It will then deploy the contract to that address and show you the result. You can check and use your contract on Ethereum.

## Frontend Technologies

- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/35px-React-icon.svg.png" alt="React Logo"> [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="TypeScript Logo" height="35"> [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" height="35"> [Vite](https://vitejs.dev/) - Fast and efficient build tool for web apps.
- <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="SASS Logo" height="35"> [SASS](https://sass-lang.com/) - A powerful CSS preprocessor for styling.
- <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask Logo" height="35"> [MetaMask](https://metamask.io/) - A cryptocurrency wallet and gateway to blockchain apps.

## Backend Technologies

- <img src="https://bun.sh/logo.svg" alt="Bun Logo" height="35"> [Bun](https://bun.sh) - All-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.
- <img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm3l6zijyz7y7fcq6mc1j.png" alt="Elysia Logo" height="35"> [Elysia](https://elysiajs.com) - TypeScript framework supercharged by Bun with End-to-End Type Safety, unified type system, and outstanding developer experience

## Libraries

- [axios](https://axios-http.com/) - Promise-based HTTP client for making API requests.
- [wagmi](https://wagmi.sh) -

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

---

This project was originally made for Degenhack and applied for the following bounties:

- Golem Network Bounty - Special Highlight Project
