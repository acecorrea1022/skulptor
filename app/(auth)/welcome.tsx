import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class welcome extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="flex items-center justify-center">
          <Text className="font-rubik-bold">Welcome</Text>
          
        </View>
      </SafeAreaView>
    );
  }
}

export default welcome;
