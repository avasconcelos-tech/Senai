import { StyleSheet, Text, View } from 'react-native';
import{ NavigationContainer } from "@react-navigation/native"

import DrawerNavigator from './routes/navigation/drawer_navigation';



export default function App() {
  return (
   <NavigationContainer>
    <DrawerNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


