import { View, Text, StyleSheet } from "react-native";

export default function Exercicio4() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 4 — Caixa Centralizada</Text>
        <View style={{flexDirection: "row", gap:0}}>
          <View style={styles.box}>
          <Text style={styles.textStyle}>Centro</Text>
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
    box: {
    width: 120,
    height: 120,
    backgroundColor: "#ed812f",
    borderRadius: 4,
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