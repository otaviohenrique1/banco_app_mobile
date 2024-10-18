import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface UsuarioTypes {
  id: string;
  cpf: string;
}

type PropsUsuarioContext = {
  usuario: UsuarioTypes;
  setUsuario: Dispatch<SetStateAction<UsuarioTypes>>;
}

const DEFAULT_VALUE = { 
  usuario: {
    id: "",
    cpf: "",
  },
  setUsuario: () => {}
}

const UsuarioContext = createContext<PropsUsuarioContext>(DEFAULT_VALUE);

interface UsuarioContextProviderProps {
  children: ReactNode;
}

function UsuarioContextProvider({ children }: UsuarioContextProviderProps)  {
  const [usuario, setUsuario] = useState<UsuarioTypes>(DEFAULT_VALUE.usuario);

  return(
    <UsuarioContext.Provider
      value={{ usuario, setUsuario }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContextProvider };
export default UsuarioContext;