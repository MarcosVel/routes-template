import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
