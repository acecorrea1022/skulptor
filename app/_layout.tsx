// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import './global.css';

import { SplashScreenController } from '@/components/splash-screen-controller';
import { useAuthContext } from '@/hooks/use-auth-context';
import { useColorScheme } from '@/hooks/useColorScheme'; // keep your existing hook
import AuthProvider from '@/providers/auth-providers';
import { useFonts } from 'expo-font';
import { useEffect, useMemo } from 'react';


SplashScreen.preventAutoHideAsync().catch(() => {});

// Separate navigator so we can access auth context
function RootNavigator() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Protected (signed-in) area */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
      </Stack.Protected>

      {/* Public (signed-out) area */}
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    // Splash is hidden by SplashScreenController once auth is also ready
  }, [error]);

  const base = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const navTheme = useMemo(
    () => ({
      ...base,
      colors: {
        ...base.colors,
        background: 'transparent',
        card: 'transparent',
        border: 'rgba(255,255,255,0.10)',
        text: '#ECEDEE',
        primary: '#d81b60',
      },
    }),
    [base]
  );

  // Avoid flashing content before fonts are loaded
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={navTheme}>
      <AuthProvider>
        {/* Hide splash ONLY when fonts AND auth are ready */}
        <SplashScreenController ready={fontsLoaded} />
        <RootNavigator />
        <StatusBar style="light" />
      </AuthProvider>
    </ThemeProvider>
  );
}
