import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export default function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <Text style={{ marginBottom: 12 }}>
        This screen is using stack navigation
      </Text>

      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("signIn")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dbe6fe",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
