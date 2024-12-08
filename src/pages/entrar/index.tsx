import * as React from "react";
import { Image, StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log("E-mail:", email);
    console.log("Senha:", password);
  };

  
  return (
    <View style={styles.telaLogin}>
      <Image
        style={styles.group99211}
        resizeMode="cover"
        source={require('../../assets/loguinho.png')} // Substitua pelo caminho correto
      />
      <Pressable
        style={[styles.telaLoginInner, styles.groupChildLayout]}
        onPress={handleLogin}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupLayout2]} />
          <Text style={styles.login}>Login</Text>
        </View>
      </Pressable>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={styles.bemVindoDeVoltaParent}>
          <Text style={styles.bemVindoDe}>Bem vindo de volta!</Text>
          <Text style={styles.informeSeuEMail}
          >
            Informe seu e-mail e senha para acessar ao sistema
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          {/* Campo de senha */}
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <TextInput
              style={[styles.input, styles.senhaPosition]}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
          </View>
          {/* Campo de e-mail */}
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <TextInput
              style={[styles.input, styles.senhaPosition]}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
      </View>
      <Pressable style={styles.aindaNoTemContainer} onPress={() => {}}>
        <Text style={styles.aindaNoTemUmaContaCriar}>
          Ainda não tem uma conta? Criar conta
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 65,
    width: 352,
    position: "absolute",
  },
  groupLayout2: {
    borderRadius: 10,
    top: 0,
  },
  groupLayout1: {
    width: 348,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 348,
    left: 0,
    position: "absolute",
  },
  senhaPosition: {
    height: 45,
    left: 10,
    right: 10,
    textAlign: "left",
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
    position: "absolute",
    paddingHorizontal: 10,
  },
  groupInnerPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "3.74%",
    bottom: "28.89%",
    top: "31.11%",
    height: "40%",
    position: "absolute",
    overflow: "hidden",
  },
  group99211: {
    top: 124,
    left: 152,
    width: 125,
    height: 18,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#307a59",
    left: 0,
    height: 65,
    width: 352,
    position: "absolute",
  },
  login: {
    top: 20,
    left: 122,
    fontSize: 19,
    letterSpacing: -0.4,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#fff",
    justifyContent: "center",
    width: 108,
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  telaLoginInner: {
    top: 448,
    left: 38,
  },
  bemVindoDe: {
    marginLeft: -108,
    fontSize: 20,
    color: "#000",
    width: 217,
    height: 23,
    fontFamily: "Inter-Regular",
    left: "50%",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  informeSeuEMail: {
    marginLeft: -172,
    top: 27,
    height: 20,
    color: "#a1a3ab",
    fontSize: 12,
    fontFamily: "Inter-Regular",
    width: 344,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  bemVindoDeVoltaParent: {
    marginLeft: -170,
    height: 47,
    width: 344,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderColor: "#a1a3ab",
    borderRadius: 10,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fff",
    height: 45,
  },
  input: {
    color: "#000",
    fontSize: 14,
    paddingHorizontal: 10,
    position: "absolute",
    width: "100%",
  },
  rectangleGroup: {
    top: 57,
  },
  vectorIcon: {
    width: "4.6%",
    right: "91.67%",
  },
  rectangleContainer: {
    top: 0,
  },
  groupContainer: {
    top: 79,
    height: 102,
    left: 0,
  },
  groupParent: {
    top: 203,
    height: 181,
    left: "50%",
    marginLeft: -174,
    width: 348,
  },
  aindaNoTemUmaContaCriar: {
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#307a59",
    width: 199,
    textAlign: "left",
    height: 20,
    marginLeft: -174,
  },
  aindaNoTemContainer: {
    top: 523,
    left: "50%",
    position: "absolute",
  },
  telaLogin: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});
