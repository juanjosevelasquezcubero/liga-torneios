import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardTorneio } from '@/components/CardTorneio';
import type { Torneio } from '@/types';

// Dados de exemplo só para o passo 1.
// Depois esses torneios vêm da tabela "torneios" no Supabase.
const TORNEIOS_EXEMPLO: Torneio[] = [
  {
    id: '1',
    nome: 'Copa Itapiranga Free Fire',
    jogo: 'Free Fire',
    data: '2026-11-29',
    status: 'aberto',
  },
  {
    id: '2',
    nome: 'Liga MLBB Itapiranga',
    jogo: 'MLBB',
    data: '2026-12-06',
    status: 'andamento',
  },
];

export default function InicioScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right']}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Liga Itapiranga</Text>
        <Text style={styles.subtitulo}>Próximos torneios de Free Fire e Mobile Legends</Text>

        <Pressable
          onPress={() => router.push('/inscricao')}
          style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
        >
          <Text style={styles.botaoTexto}>Inscrever time</Text>
        </Pressable>
      </View>

      {/* O professor pede FlatList, e não .map, para listas na tela. */}
      <FlatList
        data={TORNEIOS_EXEMPLO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTorneio
            torneio={item}
            onPress={() =>
              router.push({
                pathname: '/torneio/[id]',
                params: { id: item.id },
              })
            }
          />
        )}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  cabecalho: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A202C',
  },
  subtitulo: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 14,
    color: '#4A5568',
  },
  botao: {
    backgroundColor: '#0D7A4F',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  lista: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
});
