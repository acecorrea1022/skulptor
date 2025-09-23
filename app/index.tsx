// app/index.tsx
import { Redirect } from 'expo-router';
// TODO: replace with your real auth hook
const isSignedIn = false; 
export default function Index() {
  return isSignedIn ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/welcome" />;
}
