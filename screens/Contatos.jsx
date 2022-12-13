import React from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import ContatoCard from '../components/ContatoCard';

const Contatos = () => {
  return (
    <View style={styles.container}>
    <Header title='Brasópolis' subTitle='Supermercados'/>
  
   <View style={styles.body}>
          <Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Escolha uma opção:</Text>
         
          <ContatoCard contactName="Mercadinho Central" onPress={()=>onCategoryPress()}/>
          <ContatoCard contactName="Mercado Popular" onPress={()=>onCategoryPress()}/>
          <ContatoCard contactName="Supermercado Shibata" onPress={()=>onCategoryPress()}/>
          <ContatoCard contactName="Semar Supermercados" onPress={()=>onCategoryPress()}/>
         

   </View>
</View>
  )
}

export default Contatos




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