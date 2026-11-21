import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardTorneio } from '@/components/CardTorneio';
import { cores, espacamento, fonte } from '@/lib/tema';
import type { Torneio } from '@/types';

// Dados de exemplo. Depois vêm do Supabase.
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
        <Text style={styles.subtitulo}>
          Próximos torneios de Free Fire e Mobile Legends
        </Text>

        <Pressable
          onPress={() => router.push('/inscricao')}
          style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
        >
          <Text style={styles.botaoTexto}>Inscrever time</Text>
        </Pressable>
      </View>

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
        ListEmptyComponent={
          <Text style={styles.vazio}>Nenhum torneio aberto no momento.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  cabecalho: {
    paddingHorizontal: espacamento.medio,
    paddingTop: espacamento.medio,
    paddingBottom: espacamento.pequeno,
  },
  titulo: {
    fontSize: fonte.titulo,
    fontWeight: '700',
    color: cores.texto,
  },
  subtitulo: {
    marginTop: 4,
    marginBottom: espacamento.medio,
    fontSize: fonte.normal,
    color: cores.textoSecundario,
  },
  botao: {
    backgroundColor: cores.verde,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: fonte.normal,
    fontWeight: '700',
  },
  lista: {
    paddingHorizontal: espacamento.medio,
    paddingTop: espacamento.pequeno,
    paddingBottom: espacamento.grande,
  },
  vazio: {
    textAlign: 'center',
    color: cores.textoSecundario,
    marginTop: 32,
    fontSize: fonte.normal,
  },
});
