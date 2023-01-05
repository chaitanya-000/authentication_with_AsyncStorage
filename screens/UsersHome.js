import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";
import { AuthContext } from "../Context";

const UsersHome = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello {name}</Text>
      {/* <Button title="Logout" onPress={logout} /> */}
      <Button title="Logout" />
      {/* <Text>{value}</Text> */}
    </View>
  );
};

export default UsersHome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "44%",
  },
  Text: {
    fontSize: "54%",
  },
});
