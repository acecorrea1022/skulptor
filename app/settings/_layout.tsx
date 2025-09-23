import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Settings',
        headerStyle: { backgroundColor: '#0B1020' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="index" />
      {/* Add more settings sub-pages later, e.g. notifications, privacy, etc. */}
    </Stack>
  );
}
