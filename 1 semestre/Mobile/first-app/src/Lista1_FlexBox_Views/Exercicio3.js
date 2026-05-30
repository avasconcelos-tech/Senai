import { View, Text, StyleSheet } from "react-native";

export default function Exercicio3() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 3 — Espaçamento com space-between</Text>
        <View style={{flexDirection: "row", justifyContent: 'space-between', gap:10}}>
          <View style={styles.red_box}>
          <Text style={styles.textStyle}>R</Text>
          </View>
          
          <View style={styles.blue_box}>
            <Text style={styles.textStyle}>G</Text>
          </View>

          <View style={styles.green_box}>
            <Text style={styles.textStyle}>B</Text>
          </View>
        </View>
      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
   red_box: {
    width: 70,
    height: 70,
    backgroundColor: "#f40f0f",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
   blue_box: {
    width: 70,
    height: 70,
    backgroundColor: "#1f22c7",
    borderRadius: 4,
    justifyContent:"center",
    alignItems: "center",
  },
   green_box: {
    width: 70,
    height: 70,
    backgroundColor: "#2bec25",
    borderRadius: 4,
    justifyContent:"center",
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