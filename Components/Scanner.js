import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation";



// Classe Scanner permettant d'implémenter notre fonction scanner.
class Scanner extends React.Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
    <View>
        <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Scan')}>
                  <Text style = {styles.Text}>    Scanner   </Text>
        </TouchableOpacity>

    </View>

    );
  }
}



// Style de la page utilisée.
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffa07a",
    width : 370,
  },
  button: {
    alignItems: "center",
    backgroundColor: "yellow",
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

export default withNavigation(Scanner)