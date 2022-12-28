import React, { useState,useEffect } from 'react'
import { StyleSheet, StatusBar,View,Linking,Image} from 'react-native';
import Header from '../components/Header';
import MenuSobre from '../components/MenuSobre';
import logo from '../assets/icon.png';
import ModalAbout from '../components/ModalAbout';
import { cores } from '../style/globalStyle';
import { database } from '../firebaseConfig';
import { collection,query,getDocs } from 'firebase/firestore';

const About = () => {
const [modalVisible,setModalVisible] = useState(false);
const [telefone,setTelefone] = useState('');
//const telefone = "73-99861-5963";

useEffect(()=>{
  const getTelefone = async () => {
    const collectionRef = collection(database,'Parametros');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setTelefone(doc.data().telefone);
    });
  }
  getTelefone();

}, []);




const onAjudaPress = () =>{
  const mensagem = "Estou precisando de ajuda com o App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}


const onSugestoesPress = () =>{
  const mensagem = "Tenho sugestões ou reclamações a fazer sobre o App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}


const onNovosCadastrosPress = () =>{
  const mensagem = "Tenho interesse em fazer parte do App Guia Bahia Extremo Sul.";
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  return (
    <View style={styles.container}>
      <StatusBar
            animated={true}
            backgroundColor={cores.background}
            barStyle="light-content"
          />
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
    backgroundColor: cores.background,
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
