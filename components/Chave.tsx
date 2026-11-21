import { StyleSheet, Text, View } from 'react-native';

// Placeholder do passo 3: aqui vamos desenhar os confrontos da chave.
export function Chave() {
  return (
    <View style={styles.caixa}>
      <Text style={styles.texto}>A chave do torneio aparece aqui no passo 3.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    padding: 16,
  },
  texto: {
    color: '#4A5568',
    fontSize: 14,
  },
});
