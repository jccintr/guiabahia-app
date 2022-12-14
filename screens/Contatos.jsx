import React, {useState,useEffect} from 'react'
import { StyleSheet, SafeAreaView,View,Text,ScrollView,Linking,TouchableOpacity,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import ContatoCard from '../components/ContatoCard';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query,where,getDocs } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';


const Contatos = ({route}) => {
     const [contatos,setContatos] = useState([]);
     const {cidade,distrito,categoria} = route.params;
     const [mensagem,setMensagem] = useState('');
     //const mensagem = "Vi o seu contato no App Guia Bahia Extremo Sul !";
     const navigation = useNavigation();


  useEffect(()=>{
      const collectionRef = collection(database,'Contatos');
      const q = query(collectionRef, where("cidadeId", "==", cidade.id),where("distritoId", "==", distrito.id),where("categoriaId", "==", categoria.id));

      const unsuscribe = onSnapshot(q,querySnapshot => {
        setContatos(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome, telefone: doc.data().telefone} )))
      })
     // setIsLoading(false);
      return unsuscribe;
  }, []);

  useEffect(()=>{
    const getMensagem = async () => {

      const collectionRef = collection(database,'Parametros');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setMensagem(doc.data().mensagem);
      });

    }
    getMensagem();

}, []);

onContatoPress = (telefone) => {
  Linking.openURL(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
}

  return (
    <View style={styles.container}>
       <StatusBar
            animated={true}
            backgroundColor={cores.background}
            barStyle="light-content"
          />
    <Header title={distrito.nome} subTitle={categoria.nome}/>
    <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
       <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableOpacity>
   <View style={styles.body}>
          {contatos.length>0?<Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.verde}}>Selecione uma op????o:</Text>:''}
          {contatos.length===0 ? <Text style={styles.noRecordText}>Nenhum registro encontrado.</Text>:''}
          <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            {contatos.map(contato => <ContatoCard key={contato.id} contactName={contato.nome} onPress={()=>onContatoPress(contato.telefone)}/>)}
          </ScrollView>

   </View>
</View>
  )
}

export default Contatos


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cores.background,
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
      color: cores.verde,
      fontWeight: 'bold',

    },

  });
