import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Container from '../../components/Container';

export default function HomePage() {
  return (
    <Container>
      <Text>HomePage</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
