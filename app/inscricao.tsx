import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cores, espacamento, fonte } from '@/lib/tema';

export default function InscricaoScreen() {
  const [nomeTime, setNomeTime] = useState('');
  const [capitao, setCapitao] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [jogadores, setJogadores] = useState(['', '', '', '', '']);
  const [reserva, setReserva] = useState('');

  function atualizarJogador(indice: number, valor: string) {
    const novos = [...jogadores];
    novos[indice] = valor;
    setJogadores(novos);
  }

  function enviar() {
    if (!nomeTime.trim() || !capitao.trim() || !whatsapp.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha nome do time, capitão e WhatsApp.');
      return;
    }

    if (jogadores.some((j) => !j.trim())) {
      Alert.alert('Jogadores', 'Preencha os 5 IDs dos jogadores.');
      return;
    }

    // Aqui depois vai salvar no Supabase.
    Alert.alert(
      'Inscrição enviada',
      `Time "${nomeTime}" inscrito com sucesso!\nCapitão: ${capitao}`
    );

    // Limpa o formulário
    setNomeTime('');
    setCapitao('');
    setWhatsapp('');
    setJogadores(['', '', '', '', '']);
    setReserva('');
  }

  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right']}>
      <Text style={styles.titulo}>Inscrever time</Text>
      <Text style={styles.ajuda}>
        Preencha os dados do time para participar do torneio.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do time"
        value={nomeTime}
        onChangeText={setNomeTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do capitão"
        value={capitao}
        onChangeText={setCapitao}
      />

      <TextInput
        style={styles.input}
        placeholder="WhatsApp (com DDD)"
        value={whatsapp}
        onChangeText={setWhatsapp}
        keyboardType="phone-pad"
      />

      <Text style={styles.secao}>Jogadores (5 IDs)</Text>
      {jogadores.map((id, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`ID do jogador ${index + 1}`}
          value={id}
          onChangeText={(valor) => atualizarJogador(index, valor)}
        />
      ))}

      <TextInput
        style={styles.input}
        placeholder="ID do reserva (opcional)"
        value={reserva}
        onChangeText={setReserva}
      />

      <Pressable
        style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
        onPress={enviar}
      >
        <Text style={styles.botaoTexto}>Enviar inscrição</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: espacamento.medio,
    gap: espacamento.pequeno,
  },
  titulo: {
    fontSize: fonte.titulo,
    fontWeight: '700',
    color: cores.texto,
  },
  ajuda: {
    fontSize: fonte.normal,
    color: cores.textoSecundario,
    marginBottom: espacamento.medio,
  },
  secao: {
    fontSize: fonte.normal,
    fontWeight: '600',
    color: cores.texto,
    marginTop: espacamento.medio,
  },
  input: {
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    padding: 12,
    fontSize: fonte.normal,
  },
  botao: {
    backgroundColor: cores.verde,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: espacamento.medio,
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  botaoTexto: {
    color: cores.branco,
    fontSize: fonte.normal,
    fontWeight: '700',
  },
});
