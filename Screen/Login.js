import React from "react";
import { StyleSheet, ImageBackground,Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { withNavigation } from "react-navigation";
import { Assets } from "react-navigation-stack";
import screen_1 from '../assets/screen1_background.png';
import screen_2 from '../assets/background_screen_2.jpg';
import crystal_background from '../assets/crystal_background.jpg';
import background2 from '../assets/background_2.png';
import logo from '../assets/handicapp_logo.png';
import back3 from '../assets/back_3.png';

// Page de connexion avant la home page
// on crée un background puis le logo
// on créer les boutons et le textes
class Login extends React.Component {

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
              <TextInput  style={styles.inputText} placeholder="Mot de passe"  placeholderTextColor="#003f5c"/>
          </View>


          <View>
              <TouchableOpacity>
                  <Text style={styles.forgot}>Mot de passe oublié ?</Text>
              </TouchableOpacity>
          </View>

          <View >
               <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Menu')}>
                  <Text >LOGIN</Text>
               </TouchableOpacity>
          </View>

          <View >
               <TouchableOpacity style={styles.Inscription} onPress={() => this.props.navigation.navigate('Inscription')}>
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
      backgroundColor: '#f0ffff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    inputView:{
        
        marginBottom:10,
        width:200,
        backgroundColor:"white",
        height:25,
        justifyContent:"center",
        borderRadius:5,
        alignSelf : "center"

      },
      inputText:{
        borderRadius:5,
        flex:1,
        color:"black",
        borderWidth:1,
        textAlign : 'center',

      },
      forgot:{
        color:"black",
        borderRadius:5,
        fontSize:13,
        color : '#77a8a8',
        textAlign: "center",
        alignSelf : 'center',
        width :150,
      },
      loginBtn:{
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
      Inscription:{
        width:200,
        backgroundColor:"#c0ded9",
        borderRadius:25,
        height:50,
        alignSelf:"center",
        justifyContent:"center",
        marginBottom:10,
        borderWidth:1,
        alignItems:"center",
        borderColor : "#c0ded9"
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
  
  export default withNavigation(Login)