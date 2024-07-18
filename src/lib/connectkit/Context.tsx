import React from 'react';
import { Ethereum, ArbitrumSepolia } from '@particle-network/chains';
import { ModalProvider } from '@particle-network/connectkit';
import '@particle-network/connectkit/dist/index.css';
import { evmWallets } from '@particle-network/connectors';

const ConnectKitProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ModalProvider
      options={{
        projectId: import.meta.env.VITE_APP_PARTICLE_PROJECT_ID as string,
        clientKey: import.meta.env.VITE_APP_PARTICLE_CLIENT_KEY as string,
        appId: import.meta.env.VITE_APP_PARTICLE_APP_ID as string,
        chains: [Ethereum, ArbitrumSepolia],
        connectors: [
          ...evmWallets({
            projectId: import.meta.env.VITE_APP_WALLETCONNECT_ID as string,
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
      }}
    >
      {children}
    </ModalProvider>
  );
}

export default ConnectKitProvider;