import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

export default function NlPROD() {
  const handleQRCodeScanned = () => {
    Alert.alert("QR Code Lido", "Simulação: Conteúdo do QR Code aqui.");
  };

  return (
    <View style={styles.telaInicial}>
      <Text style={styles.adicionarNovoLote}>Adicionar novo lote</Text>
      <Text style={styles.aponteACamera}>Aponte o QR Code na área abaixo</Text>

      {/* Simulador do leitor de QR Code */}
      <View style={styles.cameraContainer}>
        <Pressable
          style={styles.simulatedScanner}
          onPress={handleQRCodeScanned}
        >
          <Text style={styles.simulatedScannerText}>Simulação de Leitor</Text>
        </Pressable>
      </View>

      <Pressable style={styles.cancelButton}>
        <Text style={styles.cancelButtonText} >Cancelar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInicial: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  adicionarNovoLote: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  aponteACamera: {
    fontSize: 16,
    color: "#b8b8b8",
    textAlign: "center",
    marginBottom: 20,
  },
  cameraContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
  simulatedScanner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  simulatedScannerText: {
    color: "#555",
    fontSize: 16,
    fontWeight: "600",
  },
  cancelButton: {
    backgroundColor: "#ea4335",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
