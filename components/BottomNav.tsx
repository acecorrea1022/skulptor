import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Link, usePathname } from "expo-router";
import {
  BookOpen,
  Home,
  NotebookPen,
  Timer,
  User,
} from "lucide-react-native";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const tabs = [
  { name: "Learn", href: "/(tabs)/learn", icon: BookOpen },
  { name: "Routine", href: "/(tabs)", icon: Home },
  { name: "Focus", href: "/(tabs)/focus", icon: Timer },
  { name: "Diary", href: "/(tabs)/diary", icon: NotebookPen },
  { name: "Profile", href: "/(tabs)/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <LinearGradient
        colors={[
          "#050008", // midnight
          "#3a0e4e", // cyber grape
          "#050008", // midnight
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <BlurView
        intensity={60}
        tint="dark"
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 12,
          paddingHorizontal: 8,
          borderTopWidth: 1,
          borderColor: "rgba(255,255,255,0.1)",
          ...Platform.select({
            ios: { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
            android: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
          }),
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link href={tab.href} asChild key={tab.name}>
              <TouchableOpacity className="items-center flex-1">
                <Icon
                  size={22}
                  color={isActive ? "#d81b60" : "#e5e5e5"}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <Text
                  className={`text-xs mt-1 ${
                    isActive ? "text-magenta font-semibold" : "text-zinc-300"
                  }`}
                >
                  {tab.name}
                </Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </BlurView>
    </View>
  );
}
