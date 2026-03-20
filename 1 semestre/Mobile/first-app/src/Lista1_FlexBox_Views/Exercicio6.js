import { View, Text, StyleSheet } from "react-native";

export default function Exercicio6() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 6 — Header, Conteúdo e Footer</Text>
          <View style={styles.blue_box}>
          <Text style={styles.textStyle}>Header</Text>
          </View>
          <View style={styles.cinza_box}>
          <Text style={styles.textStyle}>Main Content</Text>
          </View>
           <View style={styles.green_box}>
          <Text style={styles.textStyle}>Footer</Text>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
flex: 1,
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
    height: 60,
    backgroundColor: "#0b8227",
    justifyContent: "center",
    alignItems: "center",
  },
   cinza_box: {
    flex: 1,
    backgroundColor: "#5c5c5c",
    justifyContent: "center",
    alignItems: "center",
  },
   green_box: {
    height: 50,
    backgroundColor: "#102bf7",
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