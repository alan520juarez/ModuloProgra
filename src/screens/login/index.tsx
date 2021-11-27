import React, {useEffect} from 'react'
import { 
Text, 
View, 
Button, 
StyleSheet,
TextInput,
TouchableOpacity
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useform } from '../../hooks/useform';
import { logininterface } from '../../interfaces/interface';
import {colors} from "../../theme/basetheme"

import { ImageBackground, } from "react-native";
interface Props extends NativeStackScreenProps<any, any>{}
 
const Component = (props: Props) => {
    const {navigation} = props;

     const{email, password, onChange} = useform<logininterface>({
         email:"",
         password: "",

     });

     useEffect(() => {
         console.log("Email => ${email}");
         console.log("Password =>${password}");
     }, [email, password]);
     
    const dologin = () => {
        if (!(email === "1" && password === "1")) return;
        
        navigation.navigate("Home");
    };

    return (
     <View style={styles.container}>
         <Text style={styles.Text}>WELCOM</Text>
        <View style={styles.button}></View>   
         <TextInput
         value={email as string}
         onChangeText={value => onChange("email" , value)}
         placeholder="Email"
         placeholderTextColor="White"
         keyboardType="email-address"
         style={styles.ButtonText}
        />
        <TextInput
         placeholder="Password"
         placeholderTextColor="White"
         secureTextEntry={true}
         onChangeText={value => onChange("password",value)}
         value={password as string}
         style={styles.ButtonText}
        />
        <View/>
        <TouchableOpacity onPress={dologin} style={styles.button}>
            <Text style={styles.button}>SINGIN</Text>
        </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
      
    },
    Text: {
        fontSize: 80,
          fontWeight: "700",
          letterSpacing: 2,
          textAlign: "center"
      },
      

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:25,
        backgroundColor: '#e20c79',
        color:"#FF00FF"
    
        
    },
    ButtonContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 300,
        alignItems: "center",
        width: "20%" ,
      },
    ButtonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
        
      }
    
    
    
    
    
  });
export default Component;
