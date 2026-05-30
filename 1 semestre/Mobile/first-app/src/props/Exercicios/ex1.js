import { Text, View, StyleSheet } from "react-native";

// export function CartaoPerfil(props) //Exemplo antigo

export function CardProduto({produto, preco}){
    return(
        <View style ={styles.card}>
            <Text style={styles.produto}>Produto: {produto}</Text>
            <Text style={styles.preco}>Preço: {preco}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: "#e5e7eb"
    },

    produto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    preco: {
        fontSize: 14,
        color: "#6b7280",
    },
})