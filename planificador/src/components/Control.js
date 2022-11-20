import React, {useState, useEffect} from 'react'
import { 
    Text,
    View,
    StyleSheet,
    Pressable,
    Image
 } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helper'

const Control = (
    {
        presupuesto,
        gastos,
    }
) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastos = gastos.reduce((total, gasto) => Number(gasto.cantidad)+ total, 0);
    setGastado(totalGastos);
    const totalDisponible = presupuesto - totalGastos;
    setDisponible(totalDisponible);
  },[gastos])

  return (
    <View style={styles.container}>
          <View style={styles.grafica}>
              <Image source={require('../img/grafico.jpg')} style={styles.image}/>
          </View>
          <View style={styles.presupuesto}>
              <Text style={styles.valor}>
                <Text style={styles.label}>Presupuesto: </Text>
                     {formatearCantidad(presupuesto)}
                </Text>

              <Text style={styles.valor}>
                <Text style={styles.label}>Disponible: </Text>
                     {formatearCantidad(disponible)}
                </Text>
              <Text style={styles.valor}>
                  <Text style={styles.label}>Gastado: </Text>
                     {formatearCantidad(gastado)}
                </Text>
                
          </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
      ...globalStyles.container,
    },

    grafica: {
      alignItems: 'center',
    },

    image: {  
      width: 250,
      height: 250,
    },
    
    presupuesto: {
      marginTop: 20,

    },

    label: {
      color: '#3B82F6',
      textAlign: 'center',
      fontWeight: '700',

    },

    valor: {
        fontSize: 22,
        textAlign: 'center',
        color: '#000',
        marginBottom: 10,
    },
 

})

export default Control