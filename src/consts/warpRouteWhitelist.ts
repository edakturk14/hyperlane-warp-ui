// If left null, all warp routes in the configured registry will be included
// If set to a list only the specified routes will be included

export const warpRouteWhitelist = [
  {
    sourceChainId: 84532, // Base Sepolia
    destinationChainId: 11155111, // Ethereum Sepolia
    tokenAddress: '0x9b7f03Bcd982FB2e32332148E234B15bEC85884e', // Your token address on Base Sepolia
  },
  {
    sourceChainId: 11155111, // Ethereum Sepolia
    destinationChainId: 84532, // Base Sepolia
    tokenAddress: '0x3A4E5844F16e4E3627A29B2fE1243308711BB167', // Your token address on Ethereum Sepolia
  },
];
