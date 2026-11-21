import { StyleSheet, Text, View } from 'react-native';

import { cores, espacamento, fonte } from '@/lib/tema';

export default function AdminScreen() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Admin</Text>
      <Text style={styles.ajuda}>
        Área do organizador: criar torneios, sortear chave e aprovar resultados.
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
  ajuda: {
    fontSize: fonte.normal,
    color: cores.textoSecundario,
    lineHeight: 20,
  },
});
