
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
  Pressable,
  Modal,
  
} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import Control from './src/components/Control';
import Formulario from './src/components/Formulario';
import { generarId } from './src/helper';
import ListadoGastos from './src/components/ListadoGastos';
const App = () => {

  const [isValidate, setIsValidate] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);


  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0){
      setIsValidate(true);
    }
    else{
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0');
    }
  }

  const handleNuevoGasto = (gasto) => {
    if (Object.values(gasto).includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setModal(!modal);

    }
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
        
          <Header />
          {isValidate ? (
          <Control 
            presupuesto={presupuesto}
            gastos={gastos}
          /> 
          ): (
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
          />

          )}
         
        </View>
        {isValidate && (
          <ListadoGastos
            gastos={gastos}
            />       
        )}
      </ScrollView>
      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => setModal(false)}

        >
          <Formulario
            handleNuevoGasto={handleNuevoGasto}
            setModal={setModal}

          />

         
        </Modal>

        )  }

      {isValidate && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image source={require('./src/img/nuevo-gasto.png')} style={styles.imagebtn}/>
        </Pressable>
      ) }




      {!isValidate?      
       <Image  
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
    minHeight : 410,
    
  },
  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    zIndex: -1,
    
  },
  imagebtn: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
});

export default App;

