import { View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

interface SessaoProps {
  children: ReactNode;
  bordaEmBaixo: boolean; 
  bordaEmCima: boolean; 
}

export default function Sessao(props: SessaoProps) {
  const { children, bordaEmBaixo, bordaEmCima } = props;
  const styleCondicional = styles(bordaEmBaixo, bordaEmCima);
  return (
    <View style={styleCondicional.sessao}>
      {children}
    </View>
  );
}
