import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando os ícones

export default function MlPROD() {
  const navigation = useNavigation<NavigationProp<any>>();
  
  const [etapa1, setEtapa1] = useState('');
  const [etapa2, setEtapa2] = useState('');
  const [etapa3, setEtapa3] = useState('');

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
              <TextInput
                style={styles.processoBox}
                value={etapa1}
                onChangeText={setEtapa1}
                placeholder="Processo 1"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa2}
                onChangeText={setEtapa2}
                placeholder="Processo 2"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa3}
                onChangeText={setEtapa3}
                placeholder="Processo 3"
                keyboardType="default"
              />
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
              <TextInput
                style={styles.processoBox}
                value={etapa1}
                onChangeText={setEtapa1}
                placeholder="Processo 1"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa2}
                onChangeText={setEtapa2}
                placeholder="Processo 2"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa3}
                onChangeText={setEtapa3}
                placeholder="Processo 3"
                keyboardType="default"
              />
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
              <TextInput
                style={styles.processoBox}
                value={etapa1}
                onChangeText={setEtapa1}
                placeholder="Processo 1"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa2}
                onChangeText={setEtapa2}
                placeholder="Processo 2"
                keyboardType="default"
              />
              <TextInput
                style={styles.processoBox}
                value={etapa3}
                onChangeText={setEtapa3}
                placeholder="Processo 3"
                keyboardType="default"
              />
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
    flexDirection: 'column', // Garantir que os TextInput fiquem um abaixo do outro
    justifyContent: 'space-between', // Garantir que os inputs não fiquem sobrepostos
  },
  processoBox: {
    backgroundColor: "#e1e1e1", // Cor de fundo para cada processo
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
    color: "#454545",
    height: 50, // Ajusta a altura das caixas de texto
  },
});
