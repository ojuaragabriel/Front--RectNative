import React, { useState, useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { Camera } from "expo-camera";  // Certifique-se de ter a importação do expo-camera
import Constants from 'expo-constants';

export default function NlPROD() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleQRCodeScanned = ({ data }: { data: string }) => {
    Alert.alert("QR Code Lido", `Conteúdo: ${data}`);
    setIsCameraActive(false);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para a câmera...</Text>;
  }
  if (hasPermission === false) {
    return (
      <Text>
        Sem permissão para acessar a câmera. Por favor, habilite nas
        configurações do dispositivo.
      </Text>
    );
  }

  return (
    <View style={styles.telaInicial}>
      <Text style={styles.adicionarNovoLote}>Adicionar novo lote</Text>
      <Text style={styles.aponteACamera}>Aponte a câmera para o QR Code</Text>

      <View style={styles.cameraContainer}>
        {isCameraActive ? (
          <Camera
            style={styles.camera}
            onBarCodeScanned={handleQRCodeScanned}
            barCodeScannerSettings={{
              barCodeTypes: [Camera.BarCodeType.qr],  // Acesso direto ao BarCodeType.qr
            }}
          />
        ) : (
          <Pressable
            style={styles.cameraPlaceholder}
            onPress={() => setIsCameraActive(true)}
          >
            <Text style={styles.cameraPlaceholderText}>
              Clique para ativar a câmera
            </Text>
          </Pressable>
        )}
      </View>

      <Pressable style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
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
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  cameraPlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  cameraPlaceholderText: {
    color: "#555",
    fontSize: 16,
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
