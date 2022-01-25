import React from 'react'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text} from 'react-native'
import settlings from '../assets/settlings.png'

// bouton parametre sur la page principale
class Parametre extends React.Component{
  _onPressButton() {
    alert('Mode paramètres')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Image source={settlings} style={styles.image}/>
              </TouchableOpacity>

          </View>
        )
    }
}


  const styles = StyleSheet.create({
    
    button: {
      flexDirection : 'row',
      flex :1,
      alignItems: "center",
      fontSize:20,
      borderRadius:10,
      justifyContent:'space-between',
      },
    image: {
        width: 40,
        height: 40,

      }
    
  });

export default Parametre