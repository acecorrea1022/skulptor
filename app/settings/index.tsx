import { Link } from 'expo-router';
import { BellRing, ChevronRight, Info, ShieldCheck, SunMoon } from 'lucide-react-native';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-zinc-950" contentContainerClassName="px-4 py-4">
      {/* Section: General */}
      <Text className="text-zinc-400 text-xs uppercase mb-2">General</Text>
      <View className="bg-zinc-900 rounded-2xl overflow-hidden mb-6">
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
          <View className="flex-row items-center gap-3">
            <SunMoon size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">App theme</Text>
              <Text className="text-zinc-400 text-sm">System / Light / Dark</Text>
            </View>
          </View>
          <ChevronRight size={18} color="#8a8a8a" />
        </TouchableOpacity>
      </View>

      {/* Section: Reminders */}
      <Text className="text-zinc-400 text-xs uppercase mb-2">Reminders</Text>
      <View className="bg-zinc-900 rounded-2xl overflow-hidden mb-6">
        <Link href="/settings" asChild>
          <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row items-center gap-3">
              <BellRing size={20} color="#c7c7c7" />
              <View>
                <Text className="text-zinc-100 text-base">Notification times</Text>
                <Text className="text-zinc-400 text-sm">Morning check-in & evening diary</Text>
              </View>
            </View>
            <ChevronRight size={18} color="#8a8a8a" />
          </TouchableOpacity>
        </Link>

        <View className="flex-row items-center justify-between px-4 py-4 border-t border-zinc-800">
          <View className="flex-row items-center gap-3">
            <BellRing size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">Midday nudge</Text>
              <Text className="text-zinc-400 text-sm">Quick pause to refocus</Text>
            </View>
          </View>
          <Switch value={false} />
        </View>
      </View>

      {/* Section: Privacy */}
      <Text className="text-zinc-400 text-xs uppercase mb-2">Privacy</Text>
      <View className="bg-zinc-900 rounded-2xl overflow-hidden mb-6">
        <View className="flex-row items-center justify-between px-4 py-4">
          <View className="flex-row items-center gap-3">
            <ShieldCheck size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">Store summary only</Text>
              <Text className="text-zinc-400 text-sm">Recommended for privacy</Text>
            </View>
          </View>
          <Switch value={true} />
        </View>

        <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-t border-zinc-800">
          <View className="flex-row items-center gap-3">
            <ShieldCheck size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">Export my data</Text>
              <Text className="text-zinc-400 text-sm">Get a copy of your data</Text>
            </View>
          </View>
          <ChevronRight size={18} color="#8a8a8a" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between px-4 py-4 border-t border-zinc-800">
          <View className="flex-row items-center gap-3">
            <ShieldCheck size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">Delete my data</Text>
              <Text className="text-zinc-400 text-sm">This cannot be undone</Text>
            </View>
          </View>
          <ChevronRight size={18} color="#8a8a8a" />
        </TouchableOpacity>
      </View>

      {/* Section: About */}
      <Text className="text-zinc-400 text-xs uppercase mb-2">About</Text>
      <View className="bg-zinc-900 rounded-2xl overflow-hidden mb-10">
        <View className="flex-row items-center justify-between px-4 py-4">
          <View className="flex-row items-center gap-3">
            <Info size={20} color="#c7c7c7" />
            <View>
              <Text className="text-zinc-100 text-base">Version</Text>
              <Text className="text-zinc-400 text-sm">0.1.0 (MVP)</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className="text-zinc-500 text-xs text-center pb-8">© {new Date().getFullYear()} Chisel</Text>
    </ScrollView>
  );
}
