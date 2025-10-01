import BottomNav from "@/components/BottomNav";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {

  return (
    <View className="flex-1 bg-midnight ">
      <Slot />
      <BottomNav />
    </View>
  );
}
