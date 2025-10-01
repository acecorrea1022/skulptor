import { router } from "expo-router";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class welcome extends Component {
  render() {
    return (
      <View className="h-full dark:bg-midnight">
        <SafeAreaView className="">
          <View className="flex items-center justify-center pt-32">
            <Text className="font-rubik-bold mb-32 dark:text-zinc-100">
              Welcome
            </Text>
            <View>
              <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
                <Text className="dark:text-zinc-100">Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default welcome;
