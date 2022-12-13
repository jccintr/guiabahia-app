import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import CityCard from '../components/CityCard';

const Home = () => {
    const navigation = useNavigation();



const onCityPress = () => {
    navigation.navigate('Categorias');
}




  return (
    <View style={styles.container}>
         <Header title="Guia Bahia" subTitle="Extremo Sul"/>
         <Text style={styles.sloganText}>A sua busca completa em um único lugar !</Text>
         <View style={styles.body}>
                <Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Escolha uma cidade:</Text>
                <CityCard cityName='Brasópolis' onPress={()=>onCityPress()}/>
                <CityCard cityName='Itajubá' onPress={()=>onCityPress()}/>
                <CityCard cityName='Paraisópolis' onPress={()=>onCityPress()}/>
                <CityCard cityName='Pouso Alegre' onPress={()=>onCityPress()}/>
                <CityCard cityName='Taubaté' onPress={()=>onCityPress()}/>
                <CityCard cityName='São José dos Campos' onPress={()=>onCityPress()}/>
         </View>
     </View>
  
  )
}

export default Home


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