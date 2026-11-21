import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Torneio } from '@/types';

// Props tipadas: o TypeScript barra se faltar o torneio ou o onPress.
type CardTorneioProps = {
  torneio: Torneio;
  onPress: () => void;
};

const ROTULO_STATUS: Record<Torneio['status'], string> = {
  aberto: 'Aberto',
  andamento: 'Em andamento',
  fim: 'Encerrado',
};

const COR_STATUS: Record<Torneio['status'], string> = {
  aberto: '#0D7A4F',
  andamento: '#C05621',
  fim: '#4A5568',
};

const ROTULO_JOGO: Record<Torneio['jogo'], string> = {
  'Free Fire': 'Free Fire',
  MLBB: 'Mobile Legends',
};

// Mostra '2026-11-29' como '29/11/2026', sem se preocupar com fuso horário.
function formatarData(dataIso: string): string {
  const [ano, mes, dia] = dataIso.split('-');
  return `${dia}/${mes}/${ano}`;
}

export function CardTorneio({ torneio, onPress }: CardTorneioProps) {
  const corStatus = COR_STATUS[torneio.status];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressionado]}
    >
      <View style={styles.topo}>
        <Text style={styles.jogo}>{ROTULO_JOGO[torneio.jogo]}</Text>
        <View style={[styles.selo, { backgroundColor: corStatus }]}>
          <Text style={styles.seloTexto}>{ROTULO_STATUS[torneio.status]}</Text>
        </View>
      </View>

      <Text style={styles.nome}>{torneio.nome}</Text>
      <Text style={styles.data}>Data: {formatarData(torneio.data)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardPressionado: {
    opacity: 0.7,
  },
  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jogo: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0D7A4F',
    textTransform: 'uppercase',
  },
  selo: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  seloTexto: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 6,
  },
  data: {
    fontSize: 14,
    color: '#4A5568',
  },
});
