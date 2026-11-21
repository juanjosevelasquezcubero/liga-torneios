import { StyleSheet, Text, View } from 'react-native';

// Placeholder do passo 2: formulário com React Hook Form + Zod.
export default function InscricaoScreen() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Inscrever time</Text>
      <Text style={styles.ajuda}>
        No passo 2, esta tela pede nome do time, capitão, WhatsApp, 5 IDs de
        jogador e 1 reserva. O formulário entra com React Hook Form e Zod.
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
