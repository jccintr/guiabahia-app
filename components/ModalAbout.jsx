import React, { useState } from 'react'
import { StyleSheet, Text,TouchableOpacity, Modal,View,ScrollView,StatusBar} from 'react-native';
import { cores } from '../style/globalStyle';
import { AntDesign } from '@expo/vector-icons';

const ModalAbout = ({modalVisible,setModalVisible}) => {
 
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
        <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor={cores.background}
            barStyle="light-content"
          />
            <View style={styles.header}>
                <Text style={styles.titleText}>Sobre o Guia Bahia</Text>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <AntDesign name="close" size={26} color={cores.branco} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                    <Text style={styles.aboutText}>O APP GUIA BAHIA EXTREMO SUL é uma ferramenta que busca conectar os usuários aos serviços que necessitam.</Text>
                    <Text style={styles.aboutText}>Esta ferramenta de interação social foi desenvolvida com base nas necessidades de informação e contatos relevantes sobre as mais diversas localidades do Extremo Sul da Bahia.</Text>
                    <Text style={styles.aboutText}>A idéia do APP GUIA BAHIA EXTREMO SUL é se popularizar no meio social, mantendo se como um guia, de forma contínua e constante, com sua base de dados atualizada conforme as demandas forem surgindo.</Text>
                    <Text style={styles.aboutText}>A ferramenta conecta os usuários as informações que buscam diretamente no aplicativo de comunicação conhecido como WhatsApp.</Text>
                    <Text style={styles.aboutText}>Contamos com serviços intermitentes na busca de informações que porventura não estejam presentes em nossa plataforma, bem como colaboradores que se fazem presentes para melhor atender aos usuários do Guia Bahia Extremo Sul.</Text>
                    <Text style={styles.aboutText}>Esperamos contribuir com a melhor interação social e ajuda mútua entre os envolvidos.</Text>
                    <Text style={styles.aboutText}>Agradecemos a preferência.</Text>
                    <Text style={styles.aboutText}>Desejamos que tenha uma excelente experiência!</Text>
                    <Text style={styles.aboutText}>Atenciosamente, toda a Equipe Envolvida.</Text>
                    <Text style={styles.aboutText}>ASFX PROJECTS CEO</Text>
                </ScrollView>

            </View>
        </View>
    </Modal>
  )
}

export default ModalAbout


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: cores.background,
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 5,
      marginBottom: 10,
    },
    titleText:{
       fontSize: 20,
       color: cores.branco,
       fontWeight: 'bold',
    },
    body:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 5,
    },
    aboutText: {
      fontSize: 16,
      width: '100%',
      textAlign: 'justify',
      color: cores.branco,
    }
 
  }); 