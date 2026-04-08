import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView12() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  cinza_box: {
   flex: 1,
    backgroundColor: "#5c5c5c",
    alignItems: "center",
    justifyContent: "center",
  },
  green_box: {
    height: 60,
    backgroundColor: "#0b8227",
    alignItems: "center",
    justifyContent: "center",
  },
  blue_box: {
    height: 50,
    backgroundColor:  "#102bf7",
    alignItems: "center",
    justifyContent: "center",
  },
});