import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text>About Screen</Text>
  </View>
  )
}

export default About


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