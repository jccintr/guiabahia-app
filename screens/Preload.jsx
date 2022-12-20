import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,Image,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo-300.png';
import { StatusBar } from 'expo-status-bar';
import { cores } from '../style/globalStyle';

const Preload = () => {
    const navigation = useNavigation();


    useEffect(()=>{
      
      setTimeout(() => { 

        navigation.reset({
          routes:[{name:'MainTab'}] 
        }); 

      }, 1500);
       
    }, []);


    return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
          <Image source={logo} style={styles.imagelogo}/>
          <ActivityIndicator size="large" color={cores.azul}/>
      </SafeAreaView>
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
    },
    imagelogo:{
      height: 300,
      width: 300,
      borderRadius:150,
  },
  
  }); 