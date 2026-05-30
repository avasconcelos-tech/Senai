import { View, Text, StyleSheet } from "react-native";

export default function Exercicio21() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercicio 21 — Layout em Camadas </Text>
      <View style={styles.exemplo}>
        <View style={styles.red_box}>
          <Text style={styles.textStyle}>Header</Text>
        </View>
        <View style={styles.cinza_box}>
          <Text style={styles.textStyle}>Sidebar</Text>
        </View>
        
        <View style={styles.container_row}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 8,
            }}>
            <View style={styles.green_box}>
              <Text style={styles.textStyle}>Card A</Text>
            </View>
            <View style={styles.blue_box}>
              <Text style={styles.textStyle}>Card B</Text>
            </View>
          </View>
        </View>

        <View style={styles.container_row}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <View style={styles.purple_box}>
            <Text style={styles.textStyle}>C</Text>
          </View>
          <View style={styles.green2_box}>
            <Text style={styles.textStyle}>Card D</Text>
          </View>
          <View style={styles.orange_box}>
            <Text style={styles.textStyle}>E</Text>
          </View>
        </View>
      </View>
    </View>
      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    flexDirection: "collumn",
  },
  container_row: {
    flex: 1,
    gap: 8,
    padding: 3,
    flex: 0.076,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
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
    height: 80,
    width: 405,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  green_box: {
    flex: 1,
    gap: 8,
    height: 150,
    width: 65,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  blue_box: {
    flex: 1,
    gap: 8,
    height: 150,
    width: 65,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  yellow_box: {
    flex: 2,
    gap: 8,
    height: 150,
    width: 65,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  cinza_box: {
    flex: 1,
    height: 50,
    width: 60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  purple_box: {
    flex: 1,
    gap: 8,
    height: 100,
    width: 65,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  green2_box: {
    flex: 1,
    gap: 8,
    height: 100,
    backgroundColor: "#1abc9c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  orange_box: {
    flex: 1,
    gap: 8,
    height: 100,
    width: 65,
    backgroundColor: "#e67e22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});


// Professor eu não consegui terminar esse