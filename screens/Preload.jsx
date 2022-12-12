import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,View,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Preload = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Preload Screen</Text>
        <TouchableOpacity onPress={()=> navigation.reset({routes:[{name:'MainTab'}]})}>
            <Text>Entrar</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Preload


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
    body:{
      flex:1,
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize: 26,
    }
  
  }); 