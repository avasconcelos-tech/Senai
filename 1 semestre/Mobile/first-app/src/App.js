import { StyleSheet, Text, View } from 'react-native';


import { Desafio } from './props/desafio';






export default function App() {
  return (
    <View style={styles.container}>

     <Desafio/>
     
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


