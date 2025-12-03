# Helios Chronos Deployment

This repository contains a minimal Hardhat setup + a simple smart contract 
(HeliosChronos.sol) designed to be deployed on the Helios EVM chain.

## 📌 Requirements
- Node.js (v13+ for Windows 7 users)
- NPM
- Hardhat
- Helios RPC URL
- Wallet private key

## 📦 Install

```
npm install
```

## 🚀 Deploy

```
npx hardhat run scripts/deploy.js --network helios
```

After deployment you will see:

```
HeliosChronos deployed to: 0x....
```

## 📂 Use in Remix

1. Open https://remix.ethereum.org
2. File Explorer → Import
3. Paste the raw GitHub link to the `.sol` file
4. Compile → Deploy using Injected Provider
