import { StyleSheet, Text, View } from 'react-native';

import { cores, espacamento, fonte } from '@/lib/tema';

// Placeholder da chave. No próximo passo desenha os confrontos.
export function Chave() {
  return (
    <View style={styles.caixa}>
      <Text style={styles.texto}>A chave do torneio aparece aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    backgroundColor: cores.fundoSecundario,
    borderRadius: 8,
    padding: espacamento.medio,
  },
  texto: {
    color: cores.textoSecundario,
    fontSize: fonte.normal,
  },
});
