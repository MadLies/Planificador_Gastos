
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
import Filtro from './src/components/Filtro';

const App = () => {

  const [isValidate, setIsValidate] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0){
      setIsValidate(true);
    }
    else{
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0');
    }
  }

  const handleNuevoGasto = (gasto) => {
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (gasto.id){
      const gastosActualizados = gastos.map(g => g.id === gasto.id ? gasto : g);
      setGastos(gastosActualizados);
    }
    else{
        gasto.id = generarId();
        gasto.fecha = Date.now();
        setGastos([...gastos, gasto]);

    }
        setModal(!modal);
    }

    const handleEliminarGasto = (id) => {
      if (id === ''){
        Alert.alert('Error', 'No se puede eliminar el gasto');
      }
      else{
        Alert.alert(
          '¿Desea eliminar el gasto?',
          'El gasto se eliminará permanentemente',
          [
            { text: 'No', style: 'cancel' },
            { text: 'Si, Eliminar', onPress: () => {
              
              const gastosActualizados = gastos.filter(g => g.id !== id);
              setGastos(gastosActualizados);
              setModal(!modal);
              setGasto({});
            
            }},
          ]
        );
      }
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
          <>
          <Filtro 
            filtro={filtro}
            setFiltro={setFiltro}
            gastos={gastos}
            setGastosFiltrados={setGastosFiltrados}
          />


          <ListadoGastos
            gastos={gastos}
            setModal={setModal}
            setGasto={setGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
            />  

          </>       
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
            setGasto={setGasto}
            gasto={gasto}
            handleEliminarGasto={handleEliminarGasto}

          />

         
        </Modal>

        )  }

      {isValidate && (
        <Pressable
          style={styles.btn}
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
  btn: {
    
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 30,

  },
  imagebtn: {
    width: 60,
    height: 60,

  },
});

export default App;

