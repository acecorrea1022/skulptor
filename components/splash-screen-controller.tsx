import { useAuthContext } from '@/hooks/use-auth-context';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export function SplashScreenController({ ready }: { ready: boolean }) {
  const { isLoading } = useAuthContext();

  useEffect(() => {
    // Hide splash when fonts are loaded AND auth state is resolved
    if (ready && !isLoading) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [ready, isLoading]);

  return null;
}
