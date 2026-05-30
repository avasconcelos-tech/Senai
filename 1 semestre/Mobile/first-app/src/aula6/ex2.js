import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  FlatList 
} from "react-native";

export default function ListaDeCompras2() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [produtos, setProdutos] = useState([]);

  function handleAdicionar() {
    if (produto.trim() === "" || quantidade.trim() === "") {
      Alert.alert("Atenção", "Digite o nome do produto antes de adicionar!");
      return;
    }

    const novoProduto = {
      id: Date.now().toString(),
      nome: produto,
      quantidade: quantidade,
    };

    setProdutos([...produtos, novoProduto]);

    setProduto("");
    setQuantidade("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Lista de Compras</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
          placeholder="Nome do produto (ex: Arroz)"
        />

        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Quantidade (ex: 2kg ou 1un)"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text style={styles.textoBotao}>Adicionar à Lista</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>
              {item.nome} - <Text style={styles.itemQuantidade}>{item.quantidade}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formulario: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  botao: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  itemTexto: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemQuantidade: {
    color: "#666",
    fontStyle: "italic",
  },
});