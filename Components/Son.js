import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation";


// Classe Son permettant d'implémenter la fonction Son de notre application. 
class Son extends React.Component{
  constructor(props) {
    super(props);
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Speaker')}>
                  <Text style = {styles.Text}>      Son       </Text>
              </TouchableOpacity>

          </View>
        )
    }
}





// Styles utilisés pour les boutons de la page. 
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#48d1cc",
    width : 370,
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
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

export default withNavigation(Son)