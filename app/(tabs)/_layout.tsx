import { Tabs } from 'expo-router';

import { cores } from '@/lib/tema';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: cores.verde,
        tabBarInactiveTintColor: cores.cinza,
        headerStyle: { backgroundColor: cores.fundo },
        headerTintColor: cores.texto,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Início', tabBarLabel: 'Início' }}
      />
      <Tabs.Screen
        name="ranking"
        options={{ title: 'Ranking', tabBarLabel: 'Ranking' }}
      />
    </Tabs>
  );
}
