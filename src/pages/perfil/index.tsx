import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput } from "react-native";

export default function Perfil() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Imagem de perfil */}
      <View style={styles.profileImageContainer}>
        {/* Aqui você coloca a imagem de perfil */}
        <Image 
          style={styles.profileImage} 
          source={require('../../assets/image 3.png')} // Substitua pelo caminho da sua imagem
        />
        
      </View>

      {/* Campos de informação */}
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome da empresa"
          defaultValue="Nestloco"
        />
        <TextInput 
          style={styles.input} 
          placeholder="E-mail"
          defaultValue="administrador@nestloco.com"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Tipo de Conta ecoflow"
          defaultValue="Perfil (adm/Prod)"
        />

        <TextInput 
          style={styles.input} 
          placeholder="Senha"
          secureTextEntry
          defaultValue="**********"
        />
        <Pressable style={styles.alterarSenha}>
          <Text style={styles.alterarSenhaText}>Alterar senha</Text>
        </Pressable>
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.salvarAlteracoes}>
          <Text style={styles.salvarAlteracoesText}>Salvar alterações</Text>
        </Pressable>

        <Pressable style={styles.voltar}>
          <Text style={styles.voltarText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  alterarImagem: {
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    color: "#307a59",
    fontSize: 10,
    letterSpacing: -0.2,
    textAlign: "center",
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 14,
    backgroundColor: '#fafafa',
  },
  solicitarAlteracao: {
    alignItems: 'center',
    marginVertical: 10,
  },
  solicitarAlteracaoText: {
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    color: "#307a59",
    fontSize: 12,
    textAlign: "center",
  },
  alterarSenha: {
    marginTop: 20,
  },
  alterarSenhaText: {
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    color: "#307a59",
    fontSize: 12,
    textAlign: "left",
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  salvarAlteracoes: {
    backgroundColor: '#307a59',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  salvarAlteracoesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  voltar: {
    backgroundColor: '#eaf3f0',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  voltarText: {
    color: '#307a59',
    fontSize: 16,
    fontWeight: '600',
  },
});
