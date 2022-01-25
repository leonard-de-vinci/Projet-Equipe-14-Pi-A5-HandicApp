import React, {useState} from 'react'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native'



// Fonction permettant d'implémenter la barre de recherche afin d'afficher le module souhaité.
const Recherche = () =>{
	const module = ['Dictaphone','Scanner','Localisation','Son','Visionneuse'];
	const [text, setText] = useState("");

	const search = () =>{

		if(module.indexOf(text)!== -1) {
			alert('Module disponible')
		}
		else{
			alert('Module indisponible')
		}
	}
        return(
            <View>
                <TouchableOpacity style={styles.button} >
                    <TextInput placeholder='Module souhaité' onChangeText={(text) => {setText(text)}}  style={styles.text}/>
                </TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={search} >
                    <Text>Rechercher</Text>
                </TouchableOpacity>
            </View>
        )
    
}

// Styles implémentés dans la page.
const styles = {
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      borderRadius:10,
    },
    button: {
        alignItems: "center",
        padding: 10,
        fontSize:20,
        borderRadius:10,

    },
	text:{
		borderWidth:1,
		backgroundColor:'white',
		borderRadius:10
	}

  }
export default Recherche