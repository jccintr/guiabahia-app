import React, { useState } from 'react'
import { StyleSheet, Text,TouchableOpacity, Modal,View} from 'react-native';
import { cores } from '../style/globalStyle';
import { AntDesign } from '@expo/vector-icons';

const ModalAbout = ({modalVisible,setModalVisible}) => {
 
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Sobre o Guia Bahia</Text>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <AntDesign name="close" size={26} color={cores.azul} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.aboutText}>O APP GUIA BAHIA EXTREMO SUL é uma ferramenta que busca conectar os usuários aos serviços que necessitam. Esta ferramenta de interação social foi desenvolvida com base nas mais diversas
localidades do extremo sul da Bahia.</Text>
                <Text style={styles.aboutText}>A idéia do APP GUIA BAHIA EXTREMO SUL é se popularizar no meio social, manter de forma contínua e constante, a base de dados atualizada conforme as demandas forem aparecendo. A ferramenta conecta 
os usuários diretamente ao aplicativo de comunicação conhecido como WhatsApp. Contamos com serviços intermitentes na busca de informações que porventura não estejam presentes em nossa plataforma, bem como colaboradores 
que se fazem presentes para melhor atender ao usuário.</Text>
<Text style={styles.aboutText}>Esperamos contribuir com a melhor interação social e ajuda mútua entre os envolvidos. Agradecemos a preferência. Tenho uma excelente experiência ! Att. Equipe Envolvida.</Text>
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
        backgroundColor: '#fff',
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
       color: cores.azul,
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
    }
 
  }); 