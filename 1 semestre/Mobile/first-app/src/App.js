import { StyleSheet, Text, View } from 'react-native';



import ListaDeCompras2 from './aula6/ex2';


export default function App() {
  return (
    <View style={styles.container}>

     <ListaDeCompras2></ListaDeCompras2>
     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


