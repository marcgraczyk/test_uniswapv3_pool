const { ethers } = require("hardhat");

async function mintTokens() {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.attach("0xaCc80690Fa7BE5da95125deBE8e6E392B5b87866");
    const [deployer] = await ethers.getSigners();

    console.log(deployer.address);

    // Mint tokens to your wallet
    await token.mint(ethers.utils.parseEther("1000000"));
}

mintTokens()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
