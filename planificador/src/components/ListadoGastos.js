import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import Gasto from './Gasto'
const ListadoGastos = ({gastos, setModal, setGasto , filtro , gastosFiltrados}) => {
  
    console.log(gastos.length)
    return (
        
    <View style={styles.container}>
        <Text style={styles.label}>Listado de Gastos</Text>

        {filtro? gastosFiltrados.map(gasto => (
        
                     <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setModal={setModal}
                        setGasto={setGasto}

                    />
                    
 
       ) ):gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setModal={setModal}
                        setGasto={setGasto}

                    />      
))}
        { (gastos.length===0 || (gastosFiltrados.length ===0 && !!filtro)) && (
            <Text style={styles.noGastos}>No hay gastos</Text>

        )}
        

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 100 ,
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