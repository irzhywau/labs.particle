import { PropsWithChildren } from "react"
import ConnectkitProvider from "./lib/connectkit/Context"

const AppProvider = ({ children }: PropsWithChildren) => (
  <ConnectkitProvider>
    {children}
  </ConnectkitProvider>
);

export default AppProvider;