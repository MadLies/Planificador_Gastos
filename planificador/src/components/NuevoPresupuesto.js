import React, {useState} from 'react'
import { 
StyleSheet, 
Text, 
View,
TextInput,
Pressable,
Image
} from 'react-native'


const NuevoPresupuesto = ( {
    handleNuevoPresupuesto
}) => {

  const [presupuesto, setPresupuesto] = useState(0);

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
        backgroundColor: '#fff',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 40,
        transform: [{translateY: 50}],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
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