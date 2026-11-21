import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Layout raiz: um Stack (pilha) por cima das abas.
// As telas de torneio, partida, inscrição e admin abrem "em cima" das tabs.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="torneio/[id]" options={{ title: 'Torneio' }} />
        <Stack.Screen name="partida/[id]" options={{ title: 'Partida' }} />
        <Stack.Screen name="inscricao" options={{ title: 'Inscrever time' }} />
        <Stack.Screen name="admin" options={{ title: 'Admin' }} />
      </Stack>
    </>
  );
}
