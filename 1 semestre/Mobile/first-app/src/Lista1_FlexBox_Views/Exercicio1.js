import { View, Text, StyleSheet } from "react-native";

export default function Exercicio1() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 1 — Coluna de Três Caixas</Text>
      <View style={styles.exemplo}>
        <View style={{flexDirection: "column", gap:10}}>
          <View style={styles.red_box}>
          <Text style={styles.textStyle}>Vermelho</Text>

          </View>
          
          <View style={styles.blue_box}>
            <Text style={styles.textStyle}>Azul</Text>
          </View>

          <View style={styles.green_box}>
            <Text style={styles.textStyle}>Verde</Text>
          </View>
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
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
   red_box: {
    width: 80,
    height: 80,
    backgroundColor: "#f40f0f",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
   blue_box: {
    width: 80,
    height: 80,
    backgroundColor: "#1f22c7",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
   green_box: {
    width: 80,
    height: 80,
    backgroundColor: "#2bec25",
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