import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode
}

export default function Container(props: ContainerProps) {
  return (
    <View style={styles.container}>
      {props.children}
      <StatusBar style="auto" />
    </View>
  );
}
