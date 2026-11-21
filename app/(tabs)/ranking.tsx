import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cores, espacamento, fonte } from '@/lib/tema';

export default function RankingScreen() {
  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right']}>
      <Text style={styles.titulo}>Ranking</Text>
      <Text style={styles.texto}>
        O ranking da liga entra no próximo passo, com pontos e vitórias de cada time.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: espacamento.medio,
  },
  titulo: {
    fontSize: fonte.titulo,
    fontWeight: '700',
    color: cores.texto,
    marginBottom: 8,
  },
  texto: {
    fontSize: fonte.normal,
    color: cores.textoSecundario,
    lineHeight: 22,
  },
});
