import { StyleSheet, Text, View } from 'react-native';

import Recados from './hooks/exercicios/ex_aula5';


export default function App() {
  return (
    <View style={styles.container}>

     <Recados/>
     
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


