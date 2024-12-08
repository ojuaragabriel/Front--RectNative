import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar para navegação

export default function Criar() {
  const [nomeEmpresa, setNomeEmpresa] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");
  const [tipoConta, setTipoConta] = React.useState("produtor");

  // Função para alternar entre "produtor" e "administrador"
  const toggleTipoConta = () => {
    setTipoConta((prevTipo) => (prevTipo === "produtor" ? "administrador" : "produtor"));
  };

  const navigation = useNavigation(); // Inicializa o hook de navegação

  const handleCriarConta = () => {
    if (!nomeEmpresa || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!!");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    // Aqui você pode adicionar a lógica para criar a conta (como uma API, por exemplo)
    Alert.alert("Conta criada com sucesso!", `Tipo de conta: ${tipoConta}`, [
      {
        text: "OK",
        onPress: () => {
          // Navegar para a tela correta, dependendo do tipo de conta
          if (tipoConta === "produtor") {
            navigation.navigate("MenuProdutor"); // Supondo que você tenha a tela "MenuProdutor"
          } else {
            navigation.navigate("MenuAdm"); // Supondo que você tenha a tela "MenuAdm"
          }
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Imagem do topo */}
      <Image style={styles.logo} resizeMode="cover" source={require('../../assets/loguinho.png')} />
      
      {/* Título */}
      <Text style={styles.titulo}>Criar conta</Text>

      {/* Descrição */}
      <Text style={styles.descricao}>Insira seus dados para criar uma nova conta</Text>

      {/* Campos de input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da empresa"
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        {/* Tipo de conta (simulado com botões) */}
        <View style={styles.tipoContaContainer}>
          <Text style={styles.tipoContaLabel}>Tipo de conta</Text>
          <TextInput
            style={styles.input}
            value={tipoConta === "produtor" ? "Conta Produtor" : "Conta Administrador"}
            editable={false}  // Desabilitado para edição
          />
          <Pressable style={styles.toggleButton} onPress={toggleTipoConta}>
            <Text style={styles.toggleButtonText}>
              {tipoConta === "produtor" ? "Trocar para Administrador" : "Trocar para Produtor"}
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Botão de criação de conta */}
      <Pressable style={styles.botao} onPress={handleCriarConta}>
        <Text style={styles.botaoTexto}>Criar conta</Text>
      </Pressable>

      {/* Link para quem já tem conta */}
      <Pressable style={styles.jaTemConta} onPress={() => {}}>
        <Text style={styles.jaTemContaTexto}>Já tem uma conta? Fazer login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 18,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#307a59",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 12,
    color: "#a1a3ab",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#a1a3ab",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 14,
  },
  tipoContaContainer: {
    marginBottom: 20,
    width: "100%",
  },
  tipoContaLabel: {
    fontSize: 14,
    color: "#307a59",
    marginBottom: 5,
  },
  toggleButton: {
    backgroundColor: "#307a59",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  botao: {
    backgroundColor: "#307a59",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  jaTemConta: {
    marginTop: 10,
  },
  jaTemContaTexto: {
    fontSize: 12,
    color: "#307a59",
    fontWeight: "700",
  },
});
