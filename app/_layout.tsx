import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { cores } from '@/lib/tema';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: cores.fundo },
          headerTintColor: cores.texto,
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="torneio/[id]" options={{ title: 'Torneio' }} />
        <Stack.Screen name="partida/[id]" options={{ title: 'Partida' }} />
        <Stack.Screen name="inscricao" options={{ title: 'Inscrever time' }} />
        <Stack.Screen name="admin" options={{ title: 'Admin' }} />
      </Stack>
    </>
  );
}
