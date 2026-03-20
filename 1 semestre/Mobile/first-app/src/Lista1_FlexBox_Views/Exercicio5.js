import { View, Text, StyleSheet } from "react-native";

export default function Exercicio5() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 5 — Layout de Duas Colunas</Text>
        <View style={{flexDirection: "row", gap:8, height:"100%"}}>
          <View style={styles.blue_box}>
          <Text style={styles.textStyle}>Coluna 1</Text>
          </View>
           <View style={styles.green_box}>
          <Text style={styles.textStyle}>Coluna 2</Text>
          </View>

        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
    blue_box: {
    flex: 1,
    backgroundColor: "#1841fa",
    justifyContent: "center",
    alignItems: "center",
  },
   green_box: {
    flex: 1,
    backgroundColor: "#1d7212",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
   textStyle:{
    color: "white",
    fontWeight: "bold",
  }
});