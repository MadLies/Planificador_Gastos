import React, {useState, useEffect} from 'react'
import { 
StyleSheet, 
Text, 
View,
TextInput,
Pressable,
Image
} from 'react-native'
import globalStyles from '../styles';

const NuevoPresupuesto = ( {
    presupuesto,
    setPresupuesto,
    handleNuevoPresupuesto

}) => {
  useEffect(() => {
    const obtenerAS  = async () => {
        const valor = await AsyncStorage.getItem('presupuesto');
    }
    obtenerAS();
},[])


  return (
    <View style={styles.container}>
        <Text style={styles.label}>Definir Presupuesto</Text>
        <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='Agrega tu presupuesto'
            placeholderTextColor={'#666'}
            value={presupuesto.toString()}
            onChangeText={ (presupuesto) => setPresupuesto(presupuesto)}
        />
        <Pressable 
            style={styles.btn}
            onPress={() => handleNuevoPresupuesto(presupuesto)}
            >
            <Text style={styles.btnText}>Añadir Presupuesto</Text>
        </Pressable>
    </View>
    

  )
}

const styles = StyleSheet.create({

    container: {
        ...globalStyles.container,
    },

    label: {
        color: '#3B82F6',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        textAlign: 'center',
        color: '#000',
        
        padding: 10,
        fontSize: 18,
    },

    btn: {
        backgroundColor: '#1D1CE5',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',  
    },


    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },


    image: {
        width: 100,
        height: 100,
    },

   

})

export default NuevoPresupuesto