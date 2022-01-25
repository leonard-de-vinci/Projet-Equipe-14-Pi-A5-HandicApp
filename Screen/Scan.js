import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import scan from '../assets/scan.png';
import {withNavigation} from 'react-navigation';
import {TextAnalyticsClient, AzureKeyCredential} from '@azure/ai-text-analytics';

// import des bibliothèques nécessaires

//test d'une methode pour appeler le service de traduction (essai non concluant)
const key = 'd089d7c7c7644943b1c6eeb7XXXXXXX';
const endpoint = 'https://api.cognitive.microsofttranslator.com/ ';
const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));


async function languageDetection(client) { //fonction qui doit analyser la langue d'un texte (essai non concluant)

  const languageInputArray = [
      "Ce document est rédigé en Français."
  ];
  const languageResult = await client.detectLanguage(languageInputArray); //appel du service microsoft azure

  languageResult.forEach(document => {
      console.log(`ID: ${document.id}`);
      console.log(`\tPrimary Language ${document.primaryLanguage.name}`)
  });
}



class Scan extends React.Component{ //creation de la classe avec un bouton et l'appel de la fonction ci-dessus
  constructor(props) {
    super(props);
  }
    render(){
        
      return (
        <View>
            <Button title='Scan' onPress={() => this.props.navigation.navigate('languageDetection')}/>
            <Image source={scan} style={styles.image}/>          
    
        </View>
    
      
      )
    }
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

export default withNavigation(Scan)

