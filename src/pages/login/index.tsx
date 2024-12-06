import React from "react";

import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.tetoText}>ECOFLOW</Text> {/* Texto acima da logo */}
        <Image
          source={Logo}
          style={style.logoImage}
        />
        <Text style={style.titleText}>Bem vindo ao Ecoflow</Text>
        <Text style={style.subtitleText}>
          Uma nova forma de garantir a qualidade do seu produto
        </Text>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.secondaryButton}>
          <Text style={style.secondaryButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
