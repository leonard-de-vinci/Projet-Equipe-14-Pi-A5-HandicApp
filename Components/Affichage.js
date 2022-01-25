import * as React from 'react'
import {Text,View,StyleSheet,Image, ImageBackground} from 'react-native'
import Azure from './Azure'
import Settling from './Settling'
import menu_screen from '../assets/menu_background.png';
import { withOrientation } from 'react-navigation';
// Creation de l'accueil avec le logo et le texte
class Affichage extends React.Component{
    render(){
        
        return(
            <View style={styles.container}>
                 <Azure/>   
                <Text style = {styles.Text}>
                    Bienvenue sur la page d'accueil de HandicApp
                </Text>
            </View>
        )
        
    }
}
// style de la page d'accueil/inscription
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        
    },
    paragraph:{
            margin: 24,
            marginTop: 0,
            fontSize: 20,
            fontWeight: 'bold',
            borderColor: '#000001',
            borderWidth: 1,
            backgroundColor: 'skyblue',
            borderRadius:10,
            color:'black',
    },
    Text:{
        fontSize : 15,
        fontWeight : 'bold',
        color : 'black',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
})

export default Affichage