import { SessionProvider } from "next-auth/react";

interface MyProvider {
  children?: React.ReactNode | React.ReactNode[]
}

const Provider = ({ children }: MyProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
