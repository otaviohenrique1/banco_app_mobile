import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface CartaoTypes {
  id: string,
  nome: string;
  numero: string;
  cvv: string;
  validade: string;
  tipo: string;
}

type PropsCartaoContext = { 
  listaCartoes: CartaoTypes[];
  setListaCartoes: Dispatch<SetStateAction<CartaoTypes[]>>;
}

const DEFAULT_VALUE = { 
  listaCartoes: [],
  setListaCartoes: () => {}
}

const CartaoContext = createContext<PropsCartaoContext>(DEFAULT_VALUE);

interface CartaoContextProviderProps {
  children: ReactNode;
}

function CartaoContextProvider({ children }: CartaoContextProviderProps)  {
  const [listaCartoes, setListaCartoes] = useState<CartaoTypes[]>(DEFAULT_VALUE.listaCartoes);

  return(
    <CartaoContext.Provider
      value={{ listaCartoes, setListaCartoes }}
    >
      {children}
    </CartaoContext.Provider>
  );
};

export { CartaoContextProvider };
export default CartaoContext;
