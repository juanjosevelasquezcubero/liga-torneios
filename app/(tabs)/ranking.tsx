import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Placeholder do passo 5: pontos e vitórias de cada time.
export default function RankingScreen() {
  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right']}>
      <Text style={styles.titulo}>Ranking</Text>
      <Text style={styles.texto}>
        O ranking da liga entra no passo 5, com pontos e vitórias de cada time.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 8,
  },
  texto: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
});
