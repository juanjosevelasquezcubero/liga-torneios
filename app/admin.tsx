import { StyleSheet, Text, View } from 'react-native';

// Placeholder do passo 6: criar torneio, sortear chave e aprovar resultado.
export default function AdminScreen() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Admin</Text>
      <Text style={styles.ajuda}>
        No passo 6, o organizador cria torneios, sorteia a chave e aprova o
        resultado das partidas.
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
  ajuda: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
});
