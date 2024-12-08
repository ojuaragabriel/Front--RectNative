import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

// Componente principal
export default function MlADM() {
  const [expandedLote, setExpandedLote] = useState<string | null>(null);

  // Função para alternar a visibilidade do lote
  const toggleLote = (loteId: string) => {
    setExpandedLote(expandedLote === loteId ? null : loteId);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Título Linha do Tempo no Centro */}
      <View style={styles.timelineContainer}>
        <Text style={styles.timelineText}>Linha do Tempo</Text>
      </View>

      {/* Quadro de detalhes do produto e linha do tempo no topo */}
      <View style={styles.topSection}>
        <View style={styles.productDetails}>
          {/* Layout para os itens ficarem lado a lado */}
          <View style={styles.productRow}>
            <Text style={styles.productLabel}>Nome do produto:</Text>
            <Text style={styles.productValue}>Cacau</Text>
          </View>

          <View style={styles.productRow}>
            <Text style={styles.productLabel}>Linha:</Text>
            <Text style={styles.productValue}>#50</Text>
          </View>

          <View style={styles.productRow}>
            <Text style={styles.productLabel}>ID da linha:</Text>
            <Text style={styles.productValue}>50</Text>
          </View>

          <View style={styles.productRow}>
            <Text style={styles.productLabel}>Tipo de produto:</Text>
            <Text style={styles.productValue}>Tipo 1</Text>
          </View>
        </View>
      </View>

      {/* Ícone de "voltar" */}
      <Pressable style={styles.wrapper} onPress={() => {}}>
        <Text style={styles.backText}>{"<"}</Text>
      </Pressable>

      <View style={styles.contentContainer}>
        {/* Mapeando os lotes para exibir cada um */}
        {['5028', '5027', '5026', '5025', '5030', '5029'].map((lote) => (
          <View style={styles.loteWrapper} key={lote}>
            <Pressable onPress={() => toggleLote(lote)} style={[styles.card, lote === '5030' || lote === '5029' ? styles.cardPendente : {}]}>
              <View style={styles.cardStatus}>
                {/* Status do lote com cor diferente para 'Pendente' e 'Concluído' */}
                <View
                  style={[
                    styles.statusBox,
                    lote === '5030' || lote === '5029' ? { backgroundColor: "#f4a261" } : { backgroundColor: "#307a59" }
                  ]}
                />
                <Text
                  style={[
                    styles.statusText,
                    lote === '5030' || lote === '5029' ? { color: "#f4a261" } : { color: "#307a59" }
                  ]}
                >
                  {lote === '5030' || lote === '5029' ? "Pendente" : "Concluído"}
                </Text>
              </View>
              <View style={styles.loteDetails}>
                <Text style={styles.loteNumber}>Lote #{lote}</Text>
                <Text style={styles.productName}>Cacau</Text>
              </View>
              {/* Ícone para expandir ou colapsar o lote */}
              <Ionicons 
                name={expandedLote === lote ? "chevron-up" : "chevron-down"} 
                size={24} 
                color={lote === '5030' || lote === '5029' ? "#f4a261" : "#307a59"} 
              />
            </Pressable>

            {/* Conteúdo Expansível */}
            {expandedLote === lote && (
              <View style={styles.expandedContent}>
                {/* Se o lote estiver em 'Pendente', exibe as etapas */}
                {lote === '5030' || lote === '5029' ? (
                  <>
                    <TextInput
                      style={styles.stepTextInput}
                      placeholder="Etapa 1"
                    />
                    <TextInput
                      style={styles.stepTextInput}
                      placeholder="Etapa 2"
                    />
                    <TextInput
                      style={styles.stepTextInput}
                      placeholder="Etapa 3"
                    />
                    <Pressable style={styles.actionButton}>
                      <Text style={styles.actionText}>QR Code etapa seguinte</Text>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                      <Text style={styles.actionText}>Concluir lote</Text>
                    </Pressable>
                  </>
                ) : (
                  <>
                    <Text style={styles.statusText}>Concluído</Text>
                    {/* Para lotes 'Concluídos', botão para gerar QR Code final */}
                    <Pressable style={styles.actionButton}>
                      <Text style={styles.actionText}>Gerar QR Code final</Text>
                    </Pressable>
                  </>
                )}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f7f6",  // Cor de fundo clara
  },
  wrapper: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 30,
    color: "#307a59",  // Cor do ícone de "voltar"
    fontWeight: "bold",
  },
  timelineContainer: {
    alignItems: "center",
    marginTop: 40,  // Espaço acima do título
    marginBottom: 20,  // Espaço abaixo do título
  },
  timelineText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",  // Cor do texto
  },
  topSection: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",  // Cor da linha de separação
  },
  productDetails: {
    padding: 15,
    backgroundColor: "#fff",  // Cor de fundo do quadro de detalhes
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",  // Cor da borda do quadro
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",  // Cor do label do produto
    flex: 1,
  },
  productValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",  // Cor do valor do produto
    textAlign: 'right', // Alinha o valor à direita
    flex: 1,
  },
  contentContainer: {
    marginTop: 20,
  },
  loteWrapper: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",  // Sombra da caixa do lote
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPendente: {
    backgroundColor: "#fef2e0", // Cor de fundo suave laranja para pendentes
  },
  cardStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
  },
  loteDetails: {
    flex: 1,
    marginLeft: 15,
  },
  loteNumber: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",  // Cor do número do lote
  },
  expandedContent: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f9f9f9",  // Cor de fundo para conteúdo expandido
    borderRadius: 10,
  },
  stepTextInput: {
    height: 40,
    borderColor: "#ccc",  // Cor da borda das caixas de texto para as etapas
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: "#307a59",  // Cor de fundo do botão de ação
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  actionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",  // Cor do texto do botão de ação
  },
});
