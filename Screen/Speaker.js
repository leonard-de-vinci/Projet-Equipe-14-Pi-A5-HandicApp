import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';
import son from '../assets/son.png'


// import des bibliothèques nécessaires

export default function Speaker({navigator}) { //creation d'un bouton declenchant une alerte pour le speaker (service non implemente)
  return (
    <View>
        <Button  title='Speaker' onPress={() =>(alert('Speaker'))}/>
        <Image source={son} style={styles.image}/>           
           
    </View>
         
  
  );
}
const styles = StyleSheet.create({
 
  button: {
    marginTop:200,
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderWidth:1,
    fontSize:20,
    borderRadius:10,
    width:1000,
    height:50,
  },
  image: {
    width: 200,
    height: 220,
    alignItems:'center',
    marginTop:100,
    marginLeft:100,

  },
  
});


