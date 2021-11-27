import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet,  View } from 'react-native';
import App from '../../../App'
const imagen = require ("..//../assets/imagen/puertohu.jpg");

interface Props extends NativeStackScreenProps<any, any>{

}

 const Componets = (props: Props) => {
     const {navigation} = props;
     useEffect(() => {
         setTimeout(() => {
             navigation.navigate("login")
         }, 3000);
     }, [])
    return (
        <View style={styles.Container}>
             <ImageBackground
             source={imagen} resizeMode="cover" style={styles.Imagen} />
        </View>
        
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Imagen: {
        flex: 1,
    }
})
export default Componets;