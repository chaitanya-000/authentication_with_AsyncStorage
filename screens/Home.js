import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Login")}>Login</Text>
      <Text>Register</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
