import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, SafeAreaView , ImageBackground} from 'react-native';
import { Components } from 'react';
import Recherche from '../Components/Recherche';
import Affichage from '../Components/Affichage';
import Dictaphone from '../Components/Dictaphone';
import Scanner from '../Components/Scanner';
import Localisation from '../Components/Localisation';
import Son from '../Components/Son';
import Visionneuse from '../Components/Visionneuse';
import Creation from '../Components/Creation'
import Parametre from '../Components/Parametre';
import menu_screen from '../assets/menu_background.png';
import crystal_background from '../assets/crystal_background.jpg';
import background2 from '../assets/img_yuv.png';

// import des differents components
//la balise ScrollView permet a la page d'etre defilante
//la balise BackGround sert a mettre en fond notre image
//les differents composants sont separes dans des balises views distinctes
//chaque composant a son style attitre

export default function App() {
  return (
    
  <View style={{backgroundColor:'#f0ffff', flex:1}}>
    <ImageBackground source={background2} resizeMode="cover" style={styles.image}>

   <ScrollView> 

        <View style={styles.param} flexDirection='row' >
            <Recherche/>
            <Parametre/>
            <Creation/>
        </View>

        <View style={styles.container}>
            <Affichage/>
            <StatusBar style="auto" />
        </View>

        <View style={styles.dictaphone}>
            <Dictaphone/>
      </View>

      <View style={styles.scanner}>
            <Scanner/>
      </View>

      <View style={styles.localisation}>
            <Localisation/>
      </View>

      <View style={styles.son}>
            <Son/>
      </View>

      <View style={styles.visionneuse}>
            <Visionneuse/>
      </View>
    </ScrollView>
    </ImageBackground>
</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'
  },
  param:{
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dictaphone: {
   
   
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  },
  scanner: {
    
    
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
    
  },
  localisation: {

    
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  son: {
    
    
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  visionneuse: {
    
    
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  },
  image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
});
