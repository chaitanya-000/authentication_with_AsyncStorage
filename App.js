import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import UsersHome from "./screens/UsersHome";
import { createContext, useContext, useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import Home from "./screens/Home";
import { AuthContext, AuthProvider } from "./Context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const { token } = useContext(AuthContext);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <Stack.Screen name="UsersHome" component={UsersHome} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
