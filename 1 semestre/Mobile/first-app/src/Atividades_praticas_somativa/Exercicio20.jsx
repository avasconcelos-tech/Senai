import { View, Text, StyleSheet } from "react-native";

export default function Exercicio20() {
  return (
    <View style={styles.container}>
      
          <View style={styles.red_box}>
          <Text style={styles.textStyle}>Promoção</Text>
          </View>
          
          <View style={{ flexDirection:"row", gap:8}}>
            
          <View style={styles.green_box}>
          <Text style={styles.textStyle}>Card A</Text>
          </View>
            
            
            <View style={styles.blue_box}>
          <Text style={styles.textStyle}>Card B</Text>
          </View>
              
              
              <View style={styles.yellow_box}>
          <Text style={styles.textStyle}>Card C</Text>
          </View>
          
          </View>
           
          <View style={styles.cinza_box}>
          <Text style={styles.textStyle}>Destaque</Text>
          </View>

          
            <View style={{flexDirection: "row", gap: 8}}>
           
           <View style={styles.purple_box}>
          <Text style={styles.textStyle}>Cat 1</Text>
          </View>
           
           <View style={styles.green2_box}>
          <Text style={styles.textStyle}>Cat 2</Text>
          </View>
         
          <View style={styles.orange_box}>
          <Text style={styles.textStyle}>Cat 3</Text>
          </View>
            
          </View>
         
          
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8,
    gap: 8,
    backgroundColor: "#ecf0f1",
    flexDirection: "column",
  },
   container_row: {
    gap: 8,
    padding: 3,
    flex: 1,
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
    
    height: 150,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
   blue_box: {
    flex: 1,
    
    height: 150,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
   yellow_box: {
    flex: 2,
    gap: 8,
    height: 150,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
   cinza_box: {
    flex:1,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    
  },
   purple_box: {
    flex: 1,
    gap: 8,
    height: 100,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
   green2_box: {
    flex: 1,
    gap: 8,
    height: 100,
    backgroundColor: "#1abc9c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
    orange_box: {
    flex: 1,
    gap: 8,
    height: 100,
    backgroundColor: "#e67e22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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