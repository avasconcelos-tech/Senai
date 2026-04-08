import { StyleSheet, Text, View } from 'react-native';


import Lista03 from './jsx_exemplares/Exercicios/lista03';
import Lista01 from './jsx_exemplares/Exercicios/lista01';
import Lista02 from './jsx_exemplares/Exercicios/lista02';
import ViewExemplo01 from './flexbox/01_flexbox';
import ViewExemplo02 from './flexbox/02_view';
import Exercicio1 from './Lista1_FlexBox_Views/Exercicio1';
import Exercicio2 from './Lista1_FlexBox_Views/Exercicio2';
import Exercicio3 from './Lista1_FlexBox_Views/Exercicio3';
import Exercicio4 from './Lista1_FlexBox_Views/Exercicio4';
import Exercicio5 from './Lista1_FlexBox_Views/Exercicio5';
import Exercicio6 from './Lista1_FlexBox_Views/Exercicio6';
import Exercicio7 from './Lista1_FlexBox_Views/Exercicio7';
import Exercicio8 from './Lista1_FlexBox_Views/Exercicio8';
import Exercicio12 from './Atividades_praticas_somativa/Exercicio20';
import Exercicio20 from './Atividades_praticas_somativa/Exercicio20';
import Exercicio21 from './Atividades_praticas_somativa/Exercicio21';



export default function App() {
  return (
    <View style={styles.container}>
     <Exercicio20/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});


