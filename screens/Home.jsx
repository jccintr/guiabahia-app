import React, { useState, useEffect } from 'react'
import { StyleSheet,View,Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import CityCard from '../components/CityCard';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query} from 'firebase/firestore';

const Home = () => {
    const navigation = useNavigation();
    const [cidades,setCidades] = useState([]);


    useEffect(()=>{
      const collectionRef = collection(database,'Cidades');
      const q = query(collectionRef, orderBy('nome','asc'));
      const unsuscribe = onSnapshot(q,querySnapshot => {
         setCidades(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome} )))
      })
    //  setIsLoading(false);
      return unsuscribe;
  
  }, []);    


const onCityPress = (cidade) => {
    navigation.navigate('Distritos',{cidade: cidade});
   
}




  return (
    <View style={styles.container}>
         <Header title="Guia Bahia" subTitle="Extremo Sul"/>
         <Text style={styles.sloganText}>A sua busca completa em um único lugar !</Text>
         <View style={styles.body}>
                <Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Escolha uma cidade:</Text>
                <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                {cidades.map(cidade => <CityCard key={cidade.id} cidade={cidade } onPress={()=>onCityPress(cidade)}/>)}
                </ScrollView>
                
               
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