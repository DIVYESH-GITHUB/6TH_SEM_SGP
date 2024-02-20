//import liraries
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  View,
  Text,
  Alert,
  Image,
} from "react-native";
import colors from "../../constants/colors";
import {
  responsiveHeight as h,
  responsiveFontSize as f,
  responsiveScreenWidth as w,
} from "react-native-responsive-dimensions";
import Input from "../../components/input";
import Button from "../../components/button";
import AuthNavigate from "../../components/authNavigate";
import navigationStrings from "../../navigations/navigationStrings";
import axios from "axios";

// create a component
const Login = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function handleLogin() {}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={colors.background}
          barStyle={"light-content"}
        />
        <View>
          <Image
            source={require("../../../assets/login.png")}
            style={{
              height: h(35),
              width: w(80),
              alignSelf: "center",
              marginBottom: h(2),
            }}
          />
          <Text style={styles.login}>Login</Text>

          <Text style={styles.info}>Please sign in to continue</Text>

          <Input
            iconName={"mail"}
            onChangeText={(text) => setEmail(text)}
            placeholder={"user123@gmail.com"}
            text={"Email"}
            value={email}
          />

          <Input
            iconName={"lock"}
            onChangeText={(text) => setPassword(text)}
            placeholder={"#123Hello"}
            text={"Password "}
            value={password}
          />

          <Button
            onPress={async () => await handleLogin()}
            text={"LOGIN"}
            showLoading={showLoading}
          />

          <Text style={styles.forgotPassword}>Forgot Password?</Text>

          <AuthNavigate
            onPress={() => navigation.navigate(navigationStrings.Register)}
            text1={"Don't have an account?"}
            text2={" Sign Up"}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: w(5),
  },
  login: {
    color: "white",
    fontSize: f(4.4),
    fontWeight: "600",
    letterSpacing: 1,
  },
  info: {
    color: colors.secondfontcolor,
    fontSize: f(2.6),
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: h(0.9),
    marginBottom: h(1.3),
  },
  forgotPassword: {
    color: colors.neoncolor,
    marginTop: h(3),
    alignSelf: "center",
    fontSize: f(2.2),
    padding: h(0.5),
  },
});

//make this component available to the app
export default Login;
