# Treasury DAO - On-Chain Treasury Management Toolkit for DAOs

![Treasury DAO Logo](https://storage.googleapis.com/ethglobal-api-production/projects%2Fhjfj3%2Fimages%2Ftreasurydao_1.jpg)

## Prizes

Your project has been recognized and awarded in various hackathons:

1. 🌍 Uniswap Foundation — Best Ecosystem Hack
2. <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Foiv32%2Flogo%2F1675803642879_EdjUdYhC_400x400.jpeg" width="20" height="20"/> Aave Grants DAO — Built with GHO
3. 🥇 The Graph — Best New Subgraph
4. <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Ff8ku2%2Fimages%2FChainlink%20Hexagon.png" width="20" height="20"/> Chainlink — Best Hack

## Problem Statement

DAOs are exceptional at coordinating people and capital to achieve shared goals. However, most DAOs currently delegate their treasuries to multi-sig wallets controlled by a few individuals. While this approach allows for professional treasury management, such as executing hedging strategies and maintaining liquidity positions, it still poses challenges for broader interaction with DeFi protocols like AAVE and Uniswap on networks like Polygon, Optimism, and Arbitrum.

## Solution

Treasury DAO provides a foundational toolkit for on-chain treasury management, specifically designed for any DAO deployed on Polygon, Optimism, or Arbitrum. This toolkit offers a set of tools that empower DAOs to interact with various protocols using governance proposals and custom payloads.

## Features Developed During the Hackathon

1. **AAVE Integration**: Enable existing DAOs to open short/long positions by utilizing a governance proposal payload to interact with AAVE.

2. **Uniswap V3 Integration**: Enable existing DAOs to open/close liquidity positions on Uniswap V3 by leveraging governance proposal payloads to interact with Uniswap and Chainlink.

## Competitive Advantage

Treasury DAO stands out from the competition due to its innovative approach of facilitating interaction between DAOs and DeFi protocols through governance payloads rather than introducing new smart contracts.

## How It's Made

- Treasury DAO is fully functional for DAOs deployed on Mainnet, including Polygon, Arbitrum, and Optimism.

- **The Graph Integration**: We designed a factory smart contract responsible for deploying contracts to create the DAO. By leveraging The Graph, we developed two custom API subgraphs to retrieve information about the DAOs and their operations.

- **Chainlink Integration**: Implementing a governance proposal to open an Uniswap position, executed with a considerable delay upon approval, presented a challenge. To address this, we integrated several Chainlink data feeds to enable seamless interaction between DAOs and DeFi protocols.

- **Uniswap Integration**: We developed a governance payloads builder, allowing any existing DAO contract to open LP positions by interacting with the Uniswap contract.

- **AAVE Integration**: We also built a governance payloads builder that empowers any existing DAO contract to hedge (short) any asset through interaction with the AAVE and Uniswap contracts, supporting both long and short positions.

- **UI Toolkit**: Our team created a user interface toolkit, empowering any DAO to open governance proposals and interact directly with popular protocols like AAVE and Uniswap.
