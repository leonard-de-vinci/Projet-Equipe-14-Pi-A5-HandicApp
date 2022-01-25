import React from "react";
import azure from "../assets/logo.png"
import { View, Text, StyleSheet, Image } from 'react-native'
import logo from '../assets/handicapp_logo-removebg-preview.png';

// Logo Handic'App et non Azure au final
const Azure = () =>{
    return (
        <View>
            <Image source={logo} style={styles.image}/>
        </View>
    
       
    )
}
const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 103,
        marginBottom : 20

      }
})

export default Azure