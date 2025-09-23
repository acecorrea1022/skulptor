import BottomNav from "@/components/BottomNav";
import { Redirect, Slot } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  const isSignedIn = false;

  return (
    <View className="flex-1 bg-midnight ">
      <View>
        {isSignedIn ? (
          <Redirect href="/(tabs)" />
        ) : (
          <Redirect href="/(auth)/welcome" />
        )}
      </View>
      <Slot />
      <BottomNav />
    </View>
  );
}
