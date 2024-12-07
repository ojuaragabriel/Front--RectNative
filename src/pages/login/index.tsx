import React, { useState } from "react"; // Adicionado useState
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    // Você pode adicionar lógica aqui para autenticação, se necessário
    navigation.navigate("BottomRoutes"); // Navega para a rota desejada
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.tetoText}>ECOFLOW</Text>
        <Image
          source={Logo}
          style={style.logoImage}
        />
        <Text style={style.titleText}>Bem-vindo ao Ecoflow</Text>
        <Text style={style.subtitleText}>
          Uma nova forma de garantir a qualidade do seu produto
        </Text>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity
          style={style.button}
          onPress={getLogin} // Chama a função ao clicar no botão
        >
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.secondaryButton} onPress={() => navigation.navigate('Criar')}>
          <Text style={style.secondaryButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
