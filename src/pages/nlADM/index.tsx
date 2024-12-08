import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Pressable, TextInput } from "react-native";

export default function NlADM() {
  const navigation = useNavigation<NavigationProp<any>>();

  // Estados
  const [selectedProduct, setSelectedProduct] = useState<string>("Selecione um Produto");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [timelineId, setTimelineId] = useState<string>("");

  return (
    <View style={styles.telaInicial}>
      <Image style={styles.logo} resizeMode="cover" source={require('../../assets/loguinho.png')} />
      <View style={styles.formContainer}>
        {/* Dropdown de Produto */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Produto:</Text>
          <Pressable
            style={styles.dropdown}
            onPress={() => setDropdownOpen(!dropdownOpen)}
          >
            <Text style={styles.dropdownText}>{selectedProduct}</Text>
          </Pressable>
          {dropdownOpen && (
            <View style={styles.dropdownList}>
              {["Achocolatado", "Chocolate ao Leite", "Biscoito Recheado"].map((product) => (
                <Pressable
                  key={product}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedProduct(product);
                    setDropdownOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{product}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Nome do Produto */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome do Produto:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o Nome do Produto"
            value={productName}
            onChangeText={setProductName}
          />
        </View>

        {/* Campo para ID da Linha do Tempo */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ID da Linha do Tempo:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite o ID da Linha do Tempo"
            keyboardType="numeric"
            value={timelineId}
            onChangeText={setTimelineId}
          />
        </View>

        {/* Botões de Ação */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.confirmButton]}
            onPress={() =>
              console.log({
                selectedProduct,
                productName,
                timelineId,
              })
            }
          >
            <Text style={styles.buttonText}>CONFIRMAR</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>CANCELAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInicial: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 18,
    marginBottom: 30,
  },
  formContainer: {
    width: "80%",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: "#333",
  },
  dropdown: {
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownList: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  textInput: {
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#307a59",
  },
  cancelButton: {
    backgroundColor: "#ea4335",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
