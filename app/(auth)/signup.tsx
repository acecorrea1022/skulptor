import GoogleSignInButton from "@/components/social-auth-buttons/google/google-sign-in-button";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  return (
    <SafeAreaView className="h-full dark:bg-midnight">
      <View>
        <Text className="dark:text-zinc-100">
          Signin to Google
        </Text>
        <GoogleSignInButton />
      </View>
    </SafeAreaView>
  );
};

export default signup;
