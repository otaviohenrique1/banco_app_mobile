import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface UsuarioTypes {
  id: string;
  nome: string;
  senha: string;
  cpf: string;
  saldo: number;
  agencia: number;
  conta: number;
  banco: number;
}

type PropsUsuarioContext = {
  listaUsuarios: UsuarioTypes[];
  setListaUsuarios: Dispatch<SetStateAction<UsuarioTypes[]>>;
}

const DEFAULT_VALUE = { 
  listaUsuarios: [],
  setListaUsuarios: () => {}
}

const UsuarioContext = createContext<PropsUsuarioContext>(DEFAULT_VALUE);

interface UsuarioContextProviderProps {
  children: ReactNode;
}

function UsuarioContextProvider({ children }: UsuarioContextProviderProps)  {
  const [listaUsuarios, setListaUsuarios] = useState<UsuarioTypes[]>(DEFAULT_VALUE.listaUsuarios);

  return(
    <UsuarioContext.Provider
      value={{ listaUsuarios, setListaUsuarios }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContextProvider };
export default UsuarioContext;