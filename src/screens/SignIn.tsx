import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      <Text style={{ marginBottom: 12 }}>
        This screen is using stack navigation
      </Text>

      <Button title="Login" onPress={signIn} />

      <View style={{ height: 16 }} />

      <Button
        title="Go to sign up"
        onPress={() => navigation.navigate("signUp")}
        color="#606060"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
