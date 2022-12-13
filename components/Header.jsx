import React from 'react'
import { StyleSheet,View,Text,Dimensions,SafeAreaView} from 'react-native';

import { cores } from '../style/globalStyle';

const Header = ({title,subTitle}) => {
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.subTitle}>{subTitle}</Text>
    </SafeAreaView>
    
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      width: '100%',
      height: 100,
      backgroundColor: cores.azul,
      alignItems: 'center',
      justifyContent: 'center',
     },
    title:{
      fontWeight:'bold',
      fontSize: 28,
      color: cores.branco,
    },
    subTitle:{
        fontWeight:'bold',
        fontSize: 18,
        color: cores.branco,
    }
  
  }); 