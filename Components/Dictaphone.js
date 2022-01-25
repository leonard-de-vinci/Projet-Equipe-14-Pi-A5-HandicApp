import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { HORIZONTAL } from "react-native/Libraries/Components/ScrollView/ScrollViewContext";
import { withNavigation } from "react-navigation";

// bouton dictaphone sur la page principale permettant d'acceder au module
class Dictaphone extends React.Component{
  constructor(props) {
    super(props);
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.container}  onPress={() => this.props.navigation.navigate('Micro')}>
                  <Text style = {styles.Text}>Dictaphone</Text>
              </TouchableOpacity>

          </View>
        )
    }
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
      backgroundColor: "#f08080",
      width : 370,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#f08080",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
      width:1000,
      height:50,
    },
    Text : 
    {
        fontSize : 15,
        fontWeight : 'bold'
    }
  });

export default withNavigation(Dictaphone)