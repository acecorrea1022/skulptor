// app/(tabs)/focus.tsx
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Info, Settings } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FocusScreen() {
  return (
    <LinearGradient
      // sunset / vaporwave vibe (top → bottom)
      colors={["#007a85", "#7a3b77", "#3a0e4e", "#050008"]}
      locations={[0, 0.4, 0.65, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="px-4 pb-28">
          {/* Header */}
          <View className="pt-2 pb-4 flex-row items-center justify-between">
            <Text className="text-white text-2xl font-semibold">Focus</Text>

            <View className="flex-row gap-2">
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-9 h-9 rounded-full items-center justify-center bg-white/10 border border-white/10"
              >
                <Info size={18} color="#e5e5e5" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-9 h-9 rounded-full items-center justify-center bg-white/10 border border-white/10"
              >
                <Settings size={18} color="#e5e5e5" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Timer Hero */}
          <View className="items-center mt-4">
            {/* Outer ring */}
            <View className="w-72 h-72 rounded-full items-center justify-center border-2 border-white/15 bg-white/5">
              {/* Middle ring (subtle) */}
              <View className="w-64 h-64 rounded-full items-center justify-center border-2 border-white/10 bg-white/5">
                {/* Inner content */}
                <View className="w-56 h-56 rounded-full items-center justify-center bg-white/5">
                  <Text className="text-white text-5xl font-semibold tracking-tight">
                    25:00
                  </Text>
                  <Text className="text-white/70 mt-1">DEEP FOCUS</Text>
                </View>
              </View>

              {/* Play button (floating at bottom of ring) */}
              <View className="absolute -bottom-6">
                <TouchableOpacity
                  activeOpacity={0.9}
                  className="w-16 h-16 rounded-full items-center justify-center bg-[#D81B60] shadow-lg"
                  style={{
                    shadowColor: "#D81B60",
                    shadowOpacity: 0.6,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: 12,
                  }}
                >
                  {/* Triangle play icon with CSS borders */}
                  <View
                    style={{
                      width: 0,
                      height: 0,
                      borderLeftWidth: 10,
                      borderLeftColor: "transparent",
                      borderRightWidth: 0,
                      borderRightColor: "transparent",
                      borderTopWidth: 16,
                      borderTopColor: "white",
                      transform: [{ rotate: "90deg" }],
                      marginLeft: 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </LinearGradient>
  );
}
