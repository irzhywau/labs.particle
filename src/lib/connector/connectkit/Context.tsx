import React from 'react';
import { Ethereum, ArbitrumSepolia } from '@particle-network/chains';
import { ModalProvider } from '@particle-network/connectkit';
import '@particle-network/connectkit/dist/index.css';
import { evmWallets } from '@particle-network/connectors';

const ConnectKitProvider = ({ children }: React.PropsWithChildren) => (
  <ModalProvider
    options={{
      projectId: process.env.REACT_APP_PROJECT_ID as string,
      clientKey: process.env.REACT_APP_CLIENT_KEY as string,
      appId: process.env.REACT_APP_APP_ID as string,
      chains: [Ethereum, ArbitrumSepolia],
      connectors: [
        ...evmWallets({
          projectId: process.env.REACT_APP_WALLETCONNECT_ID as string,
          showQrModal: true
        })
      ],
      erc4337: {
        //optional: account abstraction wallet UI config (displaying the smart account rather than EOA)
        name: 'SIMPLE',
        version: '1.0.0'
      },
      wallet: {
        //optional: particle wallet config
        customStyle: {
          supportChains: [Ethereum, ArbitrumSepolia]
        }
      }
    }}>
    {children}
  </ModalProvider>
);

export default ConnectKitProvider;
