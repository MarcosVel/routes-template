import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TabRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
