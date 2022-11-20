import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import Gasto from './Gasto'
const ListadoGastos = ({gastos}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Listado de Gastos</Text>


        {gastos.length === 0 ? 
            <Text style={styles.noGastos}>No hay gastos</Text> : 
                gastos.map(gasto =>(
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                    />
                )
                )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 100 ,
    },
    label: {
        color: '#64748B',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    noGastos: {
        color: '#64748B',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 50,
    },

})  

export default ListadoGastos