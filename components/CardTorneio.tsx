import { Pressable, StyleSheet, Text, View } from 'react-native';

import { cores, espacamento, fonte } from '@/lib/tema';
import type { Torneio } from '@/types';

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
  aberto: cores.verde,
  andamento: cores.laranja,
  fim: cores.cinza,
};

const ROTULO_JOGO: Record<Torneio['jogo'], string> = {
  'Free Fire': 'Free Fire',
  MLBB: 'Mobile Legends',
};

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
    backgroundColor: cores.fundoCard,
    borderRadius: 12,
    padding: espacamento.medio,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.borda,
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
    fontSize: fonte.pequeno,
    fontWeight: '600',
    color: cores.verde,
    textTransform: 'uppercase',
  },
  selo: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  seloTexto: {
    color: cores.branco,
    fontSize: 12,
    fontWeight: '600',
  },
  nome: {
    fontSize: fonte.subtitulo,
    fontWeight: '700',
    color: cores.texto,
    marginBottom: 6,
  },
  data: {
    fontSize: fonte.normal,
    color: cores.textoSecundario,
  },
});
