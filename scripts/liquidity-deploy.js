// Import ethers from Hardhat package
const { ethers, upgrades } = require("hardhat");
const NonfungiblePositionManagerAddress = "0x1238536071E1c677A632429e3655c799b22cDA52";
const UniswapFactoryAddress = "0x0227628f3F023bb0B980b67D528571c95c6DaC1c";

async function main() {
    // Grab the contract factory

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const LiquidityExamples = await ethers.getContractFactory("LiquidityExamples");

    // Deploy the implementation contract and the proxy, then initialize the proxy
    console.log("Deploying LiquidityExamples");
    const liquidityExamples = await LiquidityExamples.deploy(NonfungiblePositionManagerAddress, UniswapFactoryAddress)
    //await myToken.deployed();
    //await myToken.deployTransaction.wait(); // Wait for the deployment transaction to be mined
    //console.log("MyToken deployment transaction:", myToken.deployTransaction.hash);

    console.log("LiquidityExamples deployed to:", liquidityExamples.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
