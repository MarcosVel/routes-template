import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>signIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
