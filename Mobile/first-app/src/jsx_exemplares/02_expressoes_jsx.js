import { StyleSheet,Text,View } from "react-native";

export function ExpressoesJSX() {

const nome = "Maria";
const idade = 25;
const preco = 49.9;

const usuario = {
    nome: "Ana",
    cidade: "Salto",
};

return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Expressoes JSX - Exemplos </Text>
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
        </View>

        <View>
            <Text>Maiusculas: {nome.toUpperCase()}</Text>
            <Text>Soma: {preco * 2}</Text>
        </View>
        
        <View>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.cidade}</Text>
        </View>
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgrounfColor: "#f5f5f5", 

    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBotton: 20,
    },

    exemplo: {
        width: "80%",
        padding: 16,
        marginBotton: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
})

