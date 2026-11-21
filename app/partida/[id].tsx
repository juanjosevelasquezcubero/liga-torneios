import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { cores, espacamento, fonte } from '@/lib/tema';

export default function PartidaScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Partida</Text>
      <Text style={styles.texto}>ID da partida: {id}</Text>
      <Text style={styles.ajuda}>
        Em breve esta tela mostrará os times, o código da sala e o envio do resultado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: espacamento.medio,
    gap: 12,
  },
  titulo: {
    fontSize: fonte.titulo,
    fontWeight: '700',
    color: cores.texto,
  },
  texto: {
    fontSize: fonte.normal,
    color: cores.texto,
  },
  ajuda: {
    fontSize: fonte.normal,
    color: cores.textoSecundario,
    lineHeight: 20,
  },
});
