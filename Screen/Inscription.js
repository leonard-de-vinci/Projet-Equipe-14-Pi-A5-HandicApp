import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native';
import { withNavigation } from "react-navigation";
import screen_2 from '../assets/background_screen_2.jpg';
import logo from '../assets/handicapp_logo.png';
import crystal_background from '../assets/crystal_background.jpg';
import background2 from '../assets/background_2.png';


// import du background et du logo
// création de boutons et de textes 
// création de la naviagation avec la fonction navigate 


class Inscription extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render () {
      return (
      <View style = {styles.container}>
        <ImageBackground source={background2} resizeMode="cover" style={styles.image}> 
        <Image source={logo} style={styles.Logo}/>

          <View style={styles.inputView} >

              <TextInput  style={styles.inputText} placeholder="Email"  placeholderTextColor="#003f5c"/>
          </View>

          <View style={styles.inputView} >
              <TextInput  style={styles.inputText} placeholder="Confirmer email"  placeholderTextColor="#003f5c"/>
          </View>

          <View style={styles.inputView} >
              <TextInput  style={styles.inputText} placeholder="Mot de passe"  placeholderTextColor="#003f5c"/>
          </View>

          <View style={styles.inputView} >
              <TextInput  style={styles.inputText} placeholder="Confirmer mot de passe"  placeholderTextColor="#003f5c"/>
          </View>


          
          <View >
               <TouchableOpacity style={styles.inscription} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text >Inscription</Text>
               </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
  
      );
    }
  }
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',

    },
    inputView:{
        flexDirection : 'row',
        alignSelf : 'center',
        marginBottom:5,
        width:200,
        backgroundColor:"white",
        height:25,
        justifyContent:"center",
        borderRadius : 5

      },
      inputText:{
        textAlign : 'center',
        flex:1,
        color:"#c0ded9",
        borderWidth:2,
        borderRadius : 5,
        borderColor :'#9fa9a3'
      },
     
      
      inscription:{
        flexDirection : 'row',
        alignSelf : 'center',
        justifyContent : 'center',
        width:200,
        backgroundColor:"#c0ded9",
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        borderWidth:1,
        borderColor: '#9fa9a3'
      },
      image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
      Logo : {
        flexDirection : 'row',
        width: 112,
        height: 155,
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 50,
        marginHorizontal : 150

      },
    
  });
  
  export default withNavigation(Inscription)