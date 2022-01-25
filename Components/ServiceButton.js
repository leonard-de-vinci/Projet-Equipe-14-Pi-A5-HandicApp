import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

// Utilisation d'une fonction pour expérimenter les props.
export default function ServiceButton (props) {
    return (
        <TouchableOpacity style={[{ backgroundColor: props.bgColor }, styles.container]} onPress={props.onPressButton}>
            <Text style={[{ color: props.textColor }, styles.Text]}>{props.title} </Text>
        
        </TouchableOpacity>
        
    );
}

// Styles de la page utilisée.
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        padding: 40,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageClass:
    {
      // Setting up image width.
      width: 40,
   
      // Setting up image height.
      height: 40,
   
    },
    Text : 
    {
        fontSize : 30,
        fontWeight : 'bold'
    }
})