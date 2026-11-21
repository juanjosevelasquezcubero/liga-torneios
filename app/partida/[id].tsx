import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// Placeholder do passo 4: times, código da sala e envio do print do resultado.
export default function PartidaScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Partida</Text>
      <Text style={styles.texto}>ID da partida: {id}</Text>
      <Text style={styles.ajuda}>
        No passo 4, esta tela mostra os times, o código da sala e o envio do
        print do resultado.
      </Text>
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
