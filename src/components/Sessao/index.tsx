import { View } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

interface SessaoProps {
  children: ReactNode;
}

export default function Sessao(props: SessaoProps) {
  const { children } = props;
  return (
    <View style={styles.sessao}>
      {children}
    </View>
  );
}
