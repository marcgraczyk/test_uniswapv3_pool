const { ethers } = require('ethers');

// Your Ethereum provider URL (this example uses the Ethereum mainnet)
const providerUrl = 'https://eth-sepolia.g.alchemy.com/v2/DXKbh9gAE81Kq6Enn0uIbIPGOzSTJGuk'; // Replace with your provider URL
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// The contract address of your DAO token
const tokenAddress = '0xA303B19A3a3385e9f7B7fe41c504b1C5Ab63c54b'; // Replace with your DAO token's contract address
const mockUSDCAddress = '0x014f31e84328a6A134dcEF0F58FFB0947fC8a96C';
const USDCAddress = '0xaCc80690Fa7BE5da95125deBE8e6E392B5b87866';

// The ABI (Application Binary Interface) of your DAO token's contract for the balanceOf function
// This is a simplified ABI for the balanceOf function common to ERC20 tokens
const tokenAbi = [
    "function balanceOf(address owner) view returns (uint256)"
];
const mockUSDCAbi = [
    "function balanceOf(address owner) view returns (uint256)"
];

// The address of the wallet you want to check the balance of
const walletAddress = '0x0e45a2b6710AB75C5d5C5220b4144D1BA11574a9'; // Replace with your wallet address

// Create a new contract instance
const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
const mockUSDCContract = new ethers.Contract(USDCAddress, mockUSDCAbi, provider);

async function checkBalance() {
    // Call the balanceOf function
    const tokenBalance = await tokenContract.balanceOf(walletAddress);
    const usdcBalance = await mockUSDCContract.balanceOf(walletAddress);

    // ethers.js returns BigNumber objects for values, so we convert it to a string for readability
    console.log(`Balance: ${ethers.utils.formatEther(tokenBalance)} DAO Tokens`);
    console.log(`Balance: ${ethers.utils.formatEther(usdcBalance)} mockUSDC Tokens`);
}

checkBalance().catch(console.error);