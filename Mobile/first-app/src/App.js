import { StyleSheet, Text, View } from 'react-native';
import { ExpressoesJSX } from './jsx_exemplares/02_expressoes_jsx';
import Exemplo03 from './jsx_exemplares/03_codicionais_jsx';
import Exemplo04 from './jsx_exemplares/04_listas_app_jsx';


export default function App() {
  return (
    <View style={styles.container}>
     <Exemplo04/>
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


