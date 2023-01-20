import React from 'react'
import { StyleSheet, View,TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchField = ( {placeholder, value, onChangeText}) => {
  return (
    <View style={styles.inputArea}>
      <FontAwesome name="search" size={22} color="#c1c1c1" />
     <TextInput style={styles.input}
         placeholder={placeholder}
         placeholderTextColor="#c1c1c1" 
         value={value}
         onChangeText={onChangeText}
         
       />
    </View>
  )
}

export default SearchField


const styles = StyleSheet.create({
    inputArea: {

        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderColor: '#c1c1c1',
        borderWidth: 1,
        paddingLeft: 15,
        alignItems: 'center',
        
        marginBottom: 10,
        borderRadius: 15,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 4,
      marginLeft: 10,
      color: '#fff',
    },
   
  });