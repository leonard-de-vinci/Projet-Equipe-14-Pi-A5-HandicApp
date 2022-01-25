import React from "react";
import creation from '../assets/creation.png'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text} from 'react-native'

// Palette de couleurs non applique au bouton
class Creation extends React.Component{
  _onPressButton() {
    alert('Mode création')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Text>    </Text>
                  <Image source={creation} style={styles.image}/>
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
      padding :10,
      fontSize:20,
      borderRadius:10,
      justifyContent:'space-between',
    },
    image: {
        width: 51.2,
        height: 51.2,

      }
    
  });

export default Creation