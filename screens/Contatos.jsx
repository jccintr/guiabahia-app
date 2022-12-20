import React, {useState,useEffect} from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView,Linking,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import ContatoCard from '../components/ContatoCard';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query,where } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

const Contatos = ({route}) => {
     const [contatos,setContatos] = useState([]);
     const {cidade,distrito,categoria} = route.params;
     const mensagem = "Vi o seu contato no App Guia Bahia Extremo Sul !";
     const navigation = useNavigation();


     useEffect(()=>{
      const collectionRef = collection(database,'Contatos');
      const q = query(collectionRef, where("cidadeId", "==", cidade.id),where("distritoId", "==", distrito.id),where("categoriaId", "==", categoria.id));
     // const q = query(collectionRef, orderBy('nome','asc'));
 
      const unsuscribe = onSnapshot(q,querySnapshot => {
        setContatos(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome, telefone: doc.data().telefone} )))
      })
     // setIsLoading(false);
      return unsuscribe;
  
  }, []);

onContatoPress = (telefone) => {
 
   Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  return (
    <View style={styles.container}>
    <Header title={distrito.nome} subTitle={categoria.nome}/>
    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
       <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableOpacity>
   <View style={styles.body}>
          {contatos.length>0?<Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Selecione uma opção:</Text>:''}
          {contatos.length===0 ? <Text style={styles.noRecordText}>Nenhum registro encontrado.</Text>:''}
          {contatos.map(contato => <ContatoCard key={contato.id} contactName={contato.nome} onPress={()=>onContatoPress(contato.telefone)}/>)}
        
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
    },
    backButton:{
      position: 'absolute',
      width: 50,
      height: 50,
      top: 50,
      left: 15,
    },
    noRecordText:{
      position: 'absolute',
      top: '50%',
      left: 20,
      fontSize: 14,
      width:'100%',
      textAlign: 'center',
      color: cores.azul,
      fontWeight: 'bold',
      
    },
  
  }); 