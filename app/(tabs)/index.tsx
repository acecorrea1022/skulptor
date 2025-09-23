import GradientRingLoader from "@/components/GradientRingLoader";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Info, Plus } from "lucide-react-native";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoutineScreen() {
  // shared rotation value
  const rotation = useSharedValue(0);

  // start infinite spin
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1
    );
  }, [rotation]);

  // bind rotation to style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <LinearGradient
      colors={[
        "#004d52", // teal
        "#004d52", // teal
        "#4a2f4e", // plum
        "#2e1637", // dark cyber grape
        "#0b0610", // almost black
      ]}
      locations={[0, 0.15, 0.35, 0.45, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerClassName="px-4 pb-28"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View className="pt-6">
              {/* Header */}
              <View className="flex-row items-center justify-between">
                <Text className="text-zinc-100 text-2xl font-semibold">
                  How do you feel right now?
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  className="w-9 h-9 rounded-full items-center justify-center bg-white/10 border border-white/10"
                >
                  <Info size={18} color="#e5e5e5" />
                </TouchableOpacity>
              </View>

              {/* Mood + Spinner */}
              <View className="my-56">
                <View className="flex items-center justify-center">
                  <TouchableOpacity>
                    <Plus size={24} color="#e5e5e5" />
                  </TouchableOpacity>
                  <Text className="text-zinc-100">Log mood</Text>
                </View>

                <View className="absolute inset-0 items-center justify-center">
                  <GradientRingLoader
                    size={260}
                    strokeWidth={14}
                    durationMs={1000}
                    color="#7a3b77" // plum
                    opacityEnd={0.08} // how transparent the tail becomes
                    arc={0.7} // length of the visible trail (0..1)
                  />
                </View>
              </View>

              {/* Routine List header */}
              <View>
                <View className="flex-row justify-between">
                  <Text className="text-zinc-100">Today&apos;s Routine</Text>
                  <Text className="text-zinc-100/30">0 of 3 completed</Text>
                </View>
              </View>

              {/* Placeholder Todo Tasks */}
              <View className="mt-4 space-y-3">
                {["Pray / Devotional", "Read 10 pages", "Exercise"].map(
                  (task, index) => (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      className="flex-row items-center p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      {/* Checkbox placeholder */}
                      <View className="w-6 h-6 mr-3 rounded-md border border-zinc-400/50" />

                      {/* Task text */}
                      <Text className="flex-1 text-zinc-100">{task}</Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}
