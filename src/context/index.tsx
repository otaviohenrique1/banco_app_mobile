import { ReactNode } from "react";
import { CartaoContextProvider } from "./cartao";

interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContext({ children }: GlobalContextProps) {
  return (
    <CartaoContextProvider>{children}</CartaoContextProvider>
  );
}