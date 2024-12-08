import { useNavigation, NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export default function MenuProdutor() {

    const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.telaInicial}>
      <Image style={styles.logo} resizeMode="cover" source={require('../../assets/loguinho.png')} />
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.linhasButton]} onPress={() => navigation.navigate('MlPROD')}>
          <Text style={styles.buttonText}>MEUS LOTES</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.perfilButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>PERFIL</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.novaLinhaButton]} onPress={() => navigation.navigate('NlPROD')}>
          <Text style={styles.buttonText}>NOVO LOTE</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.sairButton]} onPress={() => {navigation.navigate('Login')}}>
          <Text style={styles.buttonText}>SAIR</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInicial: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },
  logo: {
    width: 125,
    height: 18,
    marginBottom: 50, // Espaçamento entre o logo e os botões
  },
  buttonContainer: {
    width: "80%", // Limita a largura dos botões
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Espaçamento entre os botões
  },
  linhasButton: {
    backgroundColor: "#ebae25",
  },
  perfilButton: {
    backgroundColor: "#307a59",
  },
  novaLinhaButton: {
    backgroundColor: "#0064b2",
  },
  sairButton: {
    backgroundColor: "#ea4335",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
