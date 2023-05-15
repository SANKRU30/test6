import Web3 from 'web3';

let web3;

// Check if running in a browser with MetaMask
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Use MetaMask provider
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // Fallback to a local provider
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

export default web3;
