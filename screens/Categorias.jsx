import React from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';

const Categorias = () => {
  return (
    <Header title='Brasópolis' subTitle='Categorias'/>
  )
}

export default Categorias



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
     },
    body:{
      marginTop: 10,  
      flex:1,
      width: '100%',
      paddingHorizontal: 20,
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize: 26,
    },
    sloganText: {
        marginTop: 10,
        fontWeight:'bold',
        fontSize: 18,
        color: cores.azul,
    }
  
  }); 