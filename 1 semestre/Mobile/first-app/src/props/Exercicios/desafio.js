import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import App from "../App";

export function Desafio() {
  const [contEntrar, setContEntrar] = useState(0);
  const [contSair, setContSair] = useState(0);
  const [contCadastrar, setContCadastrar] = useState(0);

  return (
<View>
        <View style={styles.card}>
          <Text style={styles.text}>Entrar: {contEntrar}</Text>
          <Text style={styles.text}>Sair: {contSair}</Text>
          <Text style={styles.text}>Cadastrar: {contCadastrar}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setContEntrar(contEntrar + 1)}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setContSair(contSair + 1)}
          >
            <Text>Sair</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => setContCadastrar(contCadastrar + 1)}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, // Sombra no Android
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  buttonContainer: {
    gap: 10, // Espaçamento entre botões
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
  },
});

export default App;