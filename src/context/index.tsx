import { ReactNode } from "react";
import { CartaoContextProvider } from "./cartao";
import { UsuarioContextProvider } from "./usuario";

interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContext({ children }: GlobalContextProps) {
  return (
    <UsuarioContextProvider>
      <CartaoContextProvider>
        {children}
      </CartaoContextProvider>
    </UsuarioContextProvider>
  );
}