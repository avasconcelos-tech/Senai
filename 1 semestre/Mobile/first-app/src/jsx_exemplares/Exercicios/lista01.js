import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista01() {
  const preco = 49.9;

  function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - Ana Katy Romão </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - View com Text</Text>
        <Text style={styles.texto}>Olá</Text>
        <Text style={styles.texto}>Mundo!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Variáveis no JSX</Text>
        const linguagem = "JavaScript" const ano = 2025
        <Text style={styles.texto}>Linguagem: JavaScript</Text>
        <Text style={styles.texto}>Ano: 2026</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Função no JSX</Text>
        <Text>Preço: R${formatarPreco(preco.toFixed(2))}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});
