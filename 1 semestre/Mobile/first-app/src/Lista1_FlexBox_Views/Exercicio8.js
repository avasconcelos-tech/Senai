import { View, Text, StyleSheet } from "react-native";

export default function Exercicio8() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 8 — Sidebar com Área de Conteúdo</Text>
        
        
        <View style={styles.containerRow}>
            <View style={styles.Sidebar_box}>
            <Text style={styles.textStyle}>Sidebar</Text>
            </View>
            <View style={styles.green_box}>
            <Text style={styles.textStyle}>Card 1</Text>
            </View>
        </View>

        <View style={styles.containerRow}>
          <View style={styles.yellow_box}>
          <Text style={styles.textStyle}>Card 2</Text>
          </View>
          <View style={styles.blue_box}>
          <Text style={styles.textStyle}>Card 3</Text>
          </View>
        </View>
        
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap:10,
    backgroundColor: "#f5f5f5",
  },
  containerRow: {
    flex: 1, 
    flexDirection: "row",
    gap: 10, 
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  Sidebar_box: {
    flex: 1,
    backgroundColor: "#646464",
  },
  green_box: {
    flex: 1,
    backgroundColor: "#0b691e",
  },
  yellow_box: {
    flex: 1,
    backgroundColor: "#e59c00",
  },
  blue_box: {
    flex: 1,
    backgroundColor: "#0124ea",
  },
});