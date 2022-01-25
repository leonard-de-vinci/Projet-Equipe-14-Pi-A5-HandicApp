import React from 'react';
import { StyleSheet, Text, View,Button, Image} from 'react-native';
import mic from '../assets/mic.png';

// import des bibliothèques nécessaires

export default function Micro() {//creation d'un bouton declenchant une alerte pour le micro (service non implemente)
  
  
  return (
    <View>
        <Button  title='Micro' onPress={()=>(alert('Speaker'))}/>
        <Image source={mic} style={styles.image}/>      

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


