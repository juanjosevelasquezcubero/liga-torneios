import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Chave } from '@/components/Chave';

// useLocalSearchParams lê o [id] que veio na URL, ex.: /torneio/1
export default function TorneioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Torneio</Text>
      <Text style={styles.texto}>ID do torneio: {id}</Text>
      <Text style={styles.ajuda}>
        No próximo passo, esta tela mostra os times inscritos e a chave.
      </Text>
      <Chave />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 16,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A202C',
  },
  texto: {
    fontSize: 16,
    color: '#1A202C',
  },
  ajuda: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
});
