import { View, Text, StyleSheet } from "react-native";

export default function Exercicio7() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 7 - Grid 2x2</Text>
        
        <View style={styles.containerRow}>
          <View style={styles.green_box} />
          <View style={styles.red_box} />
        </View>

        <View style={styles.containerRow}>
          <View style={styles.blue_box} />
          <View style={styles.yellow_box} />
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
  gridWrapper: {
    flex: 1, 
    gap: 10, 
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
  green_box: {
    flex: 1,
    backgroundColor: "#03571e",
  },
  red_box: {
    flex: 1,
    backgroundColor: "#e50000",
  },
  blue_box: {
    flex: 1,
    backgroundColor: "#0124ea",
  },
  yellow_box: {
    flex: 1,
    backgroundColor: "#e59c00",
  },
});