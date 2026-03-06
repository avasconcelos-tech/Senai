import { StyleSheet, Text, View } from 'react-native';


import Lista03 from './jsx_exemplares/Exercicios/lista03';
import Lista01 from './jsx_exemplares/Exercicios/lista01';
import Lista02 from './jsx_exemplares/Exercicios/lista02';


export default function App() {
  return (
    <View style={styles.container}>
     <Lista03/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


