const { ethers } = require("ethers");
const { ethers: hreEthers } = require("hardhat");
const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/DXKbh9gAE81Kq6Enn0uIbIPGOzSTJGuk");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//const [deployer] = await ethers.getSigners();

const liquidityExamplesAddress = "0x95d3d6Fd2DC9CAB1f709CD2b39f62b3062cD183f";
const liquidityExamplesABI = require("../artifacts/contracts/LiquidityExamples.sol/LiquidityExamples.json").abi // ABI of LiquidityExamples contract
const liquidityExamplesContract = new ethers.Contract(liquidityExamplesAddress, liquidityExamplesABI, signer);

async function mintPosition() {
    const tx = await liquidityExamplesContract.mintNewPosition();
    await tx.wait();
    console.log("New position minted");
}

mintPosition().catch(console.error);
