const hre = require("hardhat");

async function main() {
    const TOKEN = await hre.ethers.getContractFactory("Token");
    const t1 = await TOKEN.deploy("Token1", "T1");

    const t2 = await TOKEN.deploy("Token2", "T2");

    console.log("T1 Address: ", (await t1).address);
    console.log("T2 Address: ", (await t2).address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});