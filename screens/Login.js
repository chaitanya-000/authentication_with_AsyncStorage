import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useStore } from "../store";
import UsersHome from "./UsersHome";
import { AuthContext } from "../Context";
import Spinner from "react-native-loading-spinner-overlay";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading, token } = useContext(AuthContext);

  // const handleLogin = async () => {
  //   (!email.includes("@") || email.length < 4 || email.length === 0) &&
  //     alert("enter valid email")(!password || password.length < 3) &&
  //     alert("Enter valid  password.");

  //   axios
  //     .post("http://127.0.0.1:8000/applogincheckusers", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response.data.token);
  //       setEmail("");
  //       setPassword("");

  //       response.data.token && navigation.navigate("UsersHome");
  //     });
  // };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <Text style={styles.Text}>Login Page</Text>
      <TextInput
        placeholder="email"
        style={styles.input}
        value={email}
        onChangeText={(enteredText) => setEmail(enteredText)}
        blurOnSubmit
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={(enteredText) => setPassword(enteredText)}
      />
      <Button
        title="Login"
        style={styles.button}
        onPress={() => {
          register(email, password);
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "60%",
    height: "07%",
    borderWidth: 2,
    fontSize: "17%",
    padding: "3%",
    margin: "3%",
    borderRadius: 7,
  },
  Text: {
    fontSize: "34%",
  },
});
