import { Tabs } from 'expo-router';

// Duas abas fixas na parte de baixo da tela: Início e Ranking.
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#0D7A4F',
        tabBarInactiveTintColor: '#718096',
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
