import React from 'react';
import { StyleSheet, Text, View,Modal,TouchableOpacity} from 'react-native';
import { EvilIcons,FontAwesome5 } from '@expo/vector-icons';
import { cores } from '../style/globalStyle';



const ModalContato = ({modalVisible,setModalVisible,contato,onWhatsAppPress,onInstagramPress,onFacebookPress}) => {




  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={()=>setModalVisible(false)}>

          <View style={styles.modalArea}>
              <View style={styles.modalBody}>
                  <TouchableOpacity style={styles.headerArea} onPress={()=>setModalVisible(false)}>
                      <EvilIcons name="close" size={26} color={cores.verde} />
                  </TouchableOpacity>
                  
                  <View style={styles.content}>
                      <Text style={styles.name}>{contato.nome}</Text>
                      <View style={styles.socialArea}>
                          {contato.telefone.length>0&&<TouchableOpacity style={styles.socialButton} onPress={()=>onWhatsAppPress(contato.telefone)}>
                             <FontAwesome5 name="whatsapp" size={30} color={cores.verde} />
                             <Text style={styles.socialName}>WhatsApp</Text>
                          </TouchableOpacity>}
                          {contato.instagram.length>0&&<TouchableOpacity style={styles.socialButton} onPress={()=>onInstagramPress(contato.instagram)}>
                             <FontAwesome5 name="instagram" size={30} color={cores.verde} />
                             <Text style={styles.socialName}>Instagram</Text>
                          </TouchableOpacity>}
                          
                          {contato.facebook.length>0&&<TouchableOpacity style={styles.socialButton} onPress={()=>onFacebookPress(contato.facebook)}>
                              <FontAwesome5 name="facebook" size={30} color={cores.verde} />
                              <Text style={styles.socialName}>Facebook</Text>
                          </TouchableOpacity>}
                          
                      </View>
                  </View>
              </View>
          </View>
        </Modal>
  )
}

export default ModalContato

const styles = StyleSheet.create({



    modalArea:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        },
    modalBody:{
        width: '100%',
        height: 160,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderTopLeftRadius:15,
        borderTopRightRadius: 15,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',  
        justifyContent: 'flex-start',
        borderColor: cores.verde,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        
    },
    
    headerArea:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    content:{
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',  
      justifyContent:'space-around',
      
     
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
        color: cores.verde,
    },
    socialArea:{
      flexDirection: 'row',
      width: '100%',
      
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 20,
    },
    socialButton: {
         flexDirection: 'column',
         alignItems:'center',
         justifyContent: 'center',
         
    },
    socialName:{
          fontWeight: 'bold',
          color: cores.verde,
    },
  
})