import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // Base Sepolia (origin chain)
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypNative, // Since it's ETH, we use EvmHypNative
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      addressOrDenom: '0x9b7f03Bcd982FB2e32332148E234B15bEC85884e', // Your Warp Route address on Base Sepolia
      logoURI: '/logos/weth.png', // Add the logo in this path
      connections: [
        {
          token: 'ethereum|sepolia|0x3A4E5844F16e4E3627A29B2fE1243308711BB167',
        },
      ],
    },
    {
      // Ethereum Sepolia (destination chain)
      chainName: 'sepolia',
      standard: TokenStandard.EvmHypSynthetic, // Synthetic version of ETH on Sepolia
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      addressOrDenom: '0x3A4E5844F16e4E3627A29B2fE1243308711BB167', // Your Warp Route address on Ethereum Sepolia
      logoURI: '/logos/weth.png', // Same ETH logo
      connections: [
        {
          token: 'ethereum|basesepolia|0x9b7f03Bcd982FB2e32332148E234B15bEC85884e',
        },
      ],
    },
  ],
  options: {},
};
