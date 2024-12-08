import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando os ícones

export default function MlPROD() {
  const navigation = useNavigation<NavigationProp<any>>();

  // Função para navegar para a tela "Ver Processo"
  const handleVerProcesso = () => {
    navigation.navigate('VerProcesso'); // Substitua 'VerProcesso' pelo nome correto da sua tela
  };

  return (
    <ScrollView style={styles.telaInicial}>
      <View style={styles.telaInicialInner}>
        <View style={styles.groupWrapper}>
          <Text style={styles.meusLotes}>Meus lotes</Text>

          {/* Lote 5030 - Pendente */}
          <View style={styles.loteContainer}>
            <Text style={styles.lote}>Lote #5030</Text>
            <Text style={styles.produto}>Cacau</Text>
            <View style={styles.statusPendente}>
              <Text style={styles.statusText}>Pendente</Text>
            </View>
            <View style={styles.processoContainer}>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 1</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 2</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox}>
                <Text style={styles.processo}>Processo 3</Text>
                <Icon name="lock-open" size={20} color="#454545" style={styles.icon} /> {/* Ícone de cadeado aberto */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Lote 5031 - Concluído */}
          <View style={styles.loteContainer}>
            <Text style={styles.lote}>Lote #5031</Text>
            <Text style={styles.produto}>Cacau</Text>
            <View style={styles.statusConcluido}>
              <Text style={styles.statusText}>Concluído</Text>
            </View>
            <View style={styles.processoContainer}>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 1</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 2</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox}>
                <Text style={styles.processo}>Processo 3</Text>
                <Icon name="lock-open" size={20} color="#454545" style={styles.icon} /> {/* Ícone de cadeado aberto */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Lote 5032 - Concluído */}
          <View style={styles.loteContainer}>
            <Text style={styles.lote}>Lote #5032</Text>
            <Text style={styles.produto}>Cacau</Text>
            <View style={styles.statusConcluido}>
              <Text style={styles.statusText}>Concluído</Text>
            </View>
            <View style={styles.processoContainer}>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 1</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox} onPress={handleVerProcesso}>
                <Text style={styles.processo}>Processo 2</Text>
                <Icon name="eye" size={20} color="#454545" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.processoBox}>
                <Text style={styles.processo}>Processo 3</Text>
                <Icon name="lock-open" size={20} color="#454545" style={styles.icon} /> {/* Ícone de cadeado aberto */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  telaInicial: {
    flex: 1,
    backgroundColor: "#fff",
  },
  telaInicialInner: {
    flex: 1,
    padding: 20,
  },
  groupWrapper: {
    marginTop: 20,
  },
  meusLotes: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  loteContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  lote: {
    fontSize: 16,
    fontWeight: "500",
    color: "#454545",
  },
  produto: {
    fontSize: 20,
    fontWeight: "500",
    color: "#454545",
    marginVertical: 5,
  },
  statusPendente: {
    backgroundColor: "#f4e13f", // Cor amarela para Pendente
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  statusConcluido: {
    backgroundColor: "#4caf50", // Cor verde para Concluído
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
  },
  processoContainer: {
    marginTop: 10,
  },
  processoBox: {
    backgroundColor: "#e1e1e1", // Cor de fundo para cada processo
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row", // Permite que o ícone e o texto fiquem na mesma linha
    alignItems: "center", // Alinha os itens no centro verticalmente
  },
  processo: {
    fontSize: 12,
    color: "#454545",
    flex: 1, // Para garantir que o texto ocupe todo o espaço disponível
  },
  icon: {
    marginLeft: 10, // Espaço entre o texto e o ícone
  },
});
