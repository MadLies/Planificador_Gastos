
import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import Control from './src/components/Control';

const App = () => {

  const [isValidate, setIsValidate] = useState(false);

  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0){
      setIsValidate(true);
    }
    else{
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isValidate ? (
        <Control /> 
        ): (
        <NuevoPresupuesto 
          handleNuevoPresupuesto={handleNuevoPresupuesto}
        />

        )}

      </View>
      {!isValidate?       <Image  
          style={styles.image}
          source={require('./src/img/goku.png')}
       /> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    

  },
  header: {
    backgroundColor: '#3B82F6',
  },
  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    zIndex: -1,
    
  },
});

export default App;
