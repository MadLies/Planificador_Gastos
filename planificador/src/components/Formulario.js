import React, {useState, useEffect} from 'react'
import {
     StyleSheet, 
     Text, 
     View,
     TextInput,
     Pressable,

    } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles';
const Formulario = ({
    handleNuevoGasto,
    setModal,
    setGasto, 
    gasto,
    handleEliminarGasto,
}) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState(''); 
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if(gasto?.nombre) {
      setNombre(gasto.nombre);
      setCantidad(gasto.cantidad);
      setCategoria(gasto.categoria);
      setId(gasto.id);
      setFecha(gasto.fecha);
    }

  },[gasto])

  return (
    <View style={styles.container}>
        <View style={styles.btnContaine}>
        
            <Pressable
                style={[styles.btn, styles.btnCancel]}
                onPress={() => {
                    setModal(false)
                    setGasto({})
                }}
            >
                <Text style={styles.btnText}
                >Cancelar</Text>
            </Pressable>
            { !!id && (
                <Pressable
                    style={[styles.btn, styles.btnDelete]}
                    onPress={() => { 
                        handleEliminarGasto(id);
                    }}
                >
                    <Text style={styles.btnText}
                    >Eliminar</Text>
                </Pressable>
            )}

        </View>

        <View style={styles.form}>
            
            <Text style={styles.title}>{gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto' } </Text>

            <View style={styles.space}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ej. Transporte'
                    placeholderTextColor={'#000'}
                    onChangeText={ setNombre}
                    value={nombre}
                />
            </View>


            <View style={styles.space}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Ej. 300'
                    placeholderTextColor={'#000'}
                    onChangeText={ setCantidad}
                    value={cantidad}

                />
            </View>


            <View style={styles.space}>
                <Text style={styles.label}>Tipo de Gasto</Text>
                <Picker
                    style={styles.input}
                    dropdownIconColor={'#000'}
                    selectedValue={categoria}
                    onValueChange={(value) => setCategoria(value)}
                
                >
                    <Picker.Item  label='--Selecciona--' value=''/>
                    <Picker.Item  label='Ahorro' value='ahorro'/>
                    <Picker.Item  label='Comida' value='comida'/>
                    <Picker.Item  label='Casa' value='casa'/>
                    <Picker.Item  label='Varios' value='gastos'/>
                    <Picker.Item  label='Ocio' value='ocio'/>
                    <Picker.Item  label='Salud' value='salud'/>
                    <Picker.Item  label='Suscripciones' value='suscripciones'/>
                </Picker>
            </View>
        
            <Pressable 
                style={styles.submit}
                onPress={() => handleNuevoGasto({nombre, cantidad, categoria, id, fecha})}
                >
                <Text style={styles.submitText}>{gasto?.nombre ? 'Guardar Cambios' :'Agregar Gasto'}</Text>
            </Pressable>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e40af',
        flex: 1,
    },

    btnContaine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 15,
        borderRadius: 10,
        flex: 1,
    },


    btnCancel: {
        backgroundColor: '#DB2777',

    }   ,

    btnDelete: {
        backgroundColor: '#EF4444',
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,

    },

    form: {
        ...globalStyles.container,
    },

    title: {
        textAlign: 'center',
        color: '#67748b',
        fontSize: 30,
        marginVertical: 30,
        fontWeight: 'bold',
    },  

    space: {
        marginVertical: 10,
    },

    label: {
        color: '#67748b',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },

    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        color: '#000',
    },

    submit: {
        backgroundColor: '#3b82f6',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,

    },


    submitText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})


export default Formulario