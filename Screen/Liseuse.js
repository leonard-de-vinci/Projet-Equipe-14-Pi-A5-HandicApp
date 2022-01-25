import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from "expo-file-system";


// service de computer Vision Azure 

export default function Liseuse (props) {
  const [ image, setImage ] = React.useState(null);
  const [ caption, setCaption ] = React.useState('');
  const [ confidence, setConfidence ] = React.useState(0);
// fonction async permet de lancer l'application meme s'il y'a un probleme de service
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
// Image picker permet d'ouvrir une image depuis la gallerie
  React.useEffect(async () => {
    if(image === null) return false;
// création de la clé API et du endpoint 
    const res = await FileSystem.uploadAsync(
      'https://handicappvision.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=Categories,Description&details=Landmarks',
      image,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/octet-stream",
          "Ocp-Apim-Subscription-Key": "d9ab5222d3cc4035b0b988b8b559da67",
        },
        httpMethod: "POST",
      }
    );

    const result = JSON.parse(res.body);
    const caption = result.description.captions.shift();

    setCaption(caption.text);
    setConfidence(caption.confidence.toFixed(2) * 100);
  }, [ image ]);

  return (
    <View>
      {caption !== null &&
      <View>
        <Image source={{ uri: image }} style={ styles.image} />
        <Text>
          {caption} avec une confiance de {confidence}%
        </Text>
      </View>
      }
      <TouchableOpacity style = {styles.button} onPress={pickImage}>
        <Text>Selectionner une image</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6495ed",
    width : 370,
  },
  image:{
    alignContent : 'center',
    alignItems : 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
    padding:15,
    
  },

  Text : 
  {
      fontSize : 15,
  },
  button:{
    width:200,
    backgroundColor:"#ddeedd",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    borderWidth:1,
    alignSelf:"center",
    borderColor : "#ddeedd"
  },
});