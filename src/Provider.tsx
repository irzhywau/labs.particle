import React from 'react';
import ConnectKit from './lib/connector/connectkit/Context';

const AppProvider = ({ children }: React.PropsWithChildren) => (
  <>
    <ConnectKit>{children}</ConnectKit>
  </>
);

export default AppProvider;
