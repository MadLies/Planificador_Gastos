import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import globalStyles from '../styles';
import { formatearCantidad, formatearFecha } from '../helper';

const iconos = {
    ahorro: require('../img/icono_ahorro.png'),
    comida: require('../img/icono_comida.png'),
    casa: require('../img/icono_casa.png'),
    gastos: require('../img/icono_gastos.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
    ocio: require('../img/icono_ocio.png'),
}
const Gasto = ({gasto, setModal, setGasto}) => {
  const {cantidad, categoria, nombre, fecha} = gasto;
  const handleAcciones = () => {
    setModal(true);
    setGasto(gasto);  

}

  return (
    <Pressable 
     onPress={handleAcciones}>
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={iconos[categoria]}
                />   
                    
                    <View style={styles.infoContainer}> 
                            
                            <Text style={styles.categoria}>{categoria}</Text>
                            <Text style={styles.nombre}>{nombre}</Text>
                            <Text style={styles.label}>{formatearCantidad(cantidad)}</Text>
                            <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
                    </View>
                </View>
                
            </View>
        </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({

    container: {
        ...globalStyles.container,
        marginBottom: 20,

    },

    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imageContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,

    },

    image: {
        width: 90,
        height: 90,
        marginRight: 20,
    }   ,

    infoContainer: {
        flex: 1,


    },

    nombre: {
        color: '#94A3B8',
        fontSize: 16,
        fontWeight: 'bold',
        
        marginBottom: 5,
    }     ,

    categoria: {
        color: '#64748B',
        marginBottom: 5,
        fontSize: 18,
        textTransform: 'uppercase',

    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    
    fecha: {
        color: '#DB2777',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default Gasto