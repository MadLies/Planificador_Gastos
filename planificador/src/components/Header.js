import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,

} from 'react-native';

const Header = () => {
  return (
    <View >
        <Text style={styles.text}>Planificador de Gastos</Text>


    </View>
  )
}

const styles = StyleSheet.create({

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 30,

    }

})

export default Header