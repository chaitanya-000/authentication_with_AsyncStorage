import { createContext, useContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const register = (email, password) => {
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:8000/applogincheckusers", {
        email: email,
        password: password,
      })
      .then((response) => {
        setUserInfo(response.data);
        AsyncStorage.setItem("token", JSON.stringify(token));
        setIsLoading(false);

        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
