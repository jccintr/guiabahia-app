import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView,Image,ActivityIndicator,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo-300.png';
import splash from '../assets/splash.png'

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
        <StatusBar
            animated={true}
            backgroundColor={cores.background}
            barStyle="light-content"
          />
        <Image source={splash}   style={styles.splash}/>
       
        <ActivityIndicator style={styles.loading} size="large" color={cores.branco}/>
      </SafeAreaView>
     )
}

export default Preload


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
       },
   splash:{
   
    width: '100%',
    height: '100%',
   
   },
   loading: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
   }
   
  }); 