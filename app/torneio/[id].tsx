import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Chave } from '@/components/Chave';
import { cores, espacamento, fonte } from '@/lib/tema';

export default function TorneioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Torneio</Text>
      <Text style={styles.texto}>ID do torneio: {id}</Text>
      <Text style={styles.ajuda}>
        Em breve esta tela mostrará os times inscritos e a chave gerada.
      </Text>
      <Chave />
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
