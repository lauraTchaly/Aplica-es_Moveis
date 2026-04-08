import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Alert,
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  

  async function getLogin() {
    try {
      if (!email || !password) {
        return Alert.alert("Atenção", "Preencha os campos obrigatórios");
      }

      setLoading(true);

      setTimeout(() => {
        Alert.alert("Logado com sucesso");
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>

      <View style={style.boxMiddle}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="Endereço de E-mail"
          IconRight={MaterialIcons}
          iconRightName="email"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          title="Senha"
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={style.boxBottom}>
        <Button
          text="Entrar"
          loading={loading}
          onPress={getLogin}
        />
      </View>

      <Text style={style.textBottom}>
        Não tem conta?
        <Text style={{ color: themas.colors.primary }}>
          {" "}Crie agora!
        </Text>
      </Text>
    </View>
  );
}