import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigatorRoutesProps } from "../routes/app.routes";

export default function Home() {
  const navigation = useNavigation<StackNavigatorRoutesProps>();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("details")}
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
});
