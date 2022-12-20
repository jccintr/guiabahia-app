import React, { useState } from 'react'
import { StyleSheet, SafeAreaView,View,Linking,Image} from 'react-native';
import Header from '../components/Header';
import MenuSobre from '../components/MenuSobre';
import logo from '../assets/guia-bahia-splash.png';
import ModalAbout from '../components/ModalAbout';

const About = () => {
const [modalVisible,setModalVisible] = useState(false);
const telefone = "73-99920-1898";

      
const onAjudaPress = () =>{
  const mensagem = "Estou precisando de ajuda com o App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  
const onSugestoesPress = () =>{
  const mensagem = "Tenho interesse em fazer parte do App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  
const onNovosCadastrosPress = () =>{
  const mensagem = "Tenho sugestões ou reclamações a fazer sobre o App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  return (
    <View style={styles.container}>
        <Header title="Guia Bahia" subTitle="Extremo Sul"/>
        <Image style={styles.logo} source={logo}/>
        <MenuSobre iconName="help-circle" iconProvider="Feather" label="Central de Ajuda" onPress={onAjudaPress}/>
        <MenuSobre iconName="ios-megaphone-outline" iconProvider="Ionicons" label="Sugestões ou reclamações" onPress={onSugestoesPress}/>
        <MenuSobre iconName="person-add" iconProvider="Octicons" label="Novos Cadastros" onPress={onNovosCadastrosPress}/>
        <MenuSobre iconName="infocirlceo" iconProvider="AntDesign" label="Sobre o Guia Bahia" onPress={()=>setModalVisible(true)}/>
        <ModalAbout modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

export default About


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    logo:{
      height: 100,
      width: 100,
      borderRadius:50,
      marginTop: 10,
      marginBottom: 10,
  }
  
  }); 