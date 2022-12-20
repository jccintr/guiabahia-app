import React, { useEffect,useState } from 'react';
import { StyleSheet, SafeAreaView,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query,where } from 'firebase/firestore';
import DistrictCard from '../components/DistrictCard';
import { AntDesign } from '@expo/vector-icons';

const Distritos = ({route}) => {
   const navigation = useNavigation();
   const {cidade} = route.params;
   const [distritos,setDistritos] = useState([]);
   

   useEffect(()=>{
    const collectionRef = collection(database,'Distritos');
    const q = query(collectionRef, where("cidadeId", "==", cidade.id));
   // const q = query(collectionRef, orderBy('nome','asc'));

    const unsuscribe = onSnapshot(q,querySnapshot => {
      setDistritos(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome} )))
    })
   // setIsLoading(false);
    return unsuscribe;

}, []);

const onDistritoPress = (distrito,cidade) => {
   navigation.navigate('Categorias',{distrito: distrito,cidade:cidade});
}

  return (
     <View style={styles.container}>
         <Header title={cidade.nome} subTitle='Distritos'/>
         <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
         </TouchableOpacity>
         <View style={styles.body}>
                <Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Escolha uma localidade:</Text>
                <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                {distritos.map(distrito => <DistrictCard key={distrito.id} distrito={distrito} onPress={()=>onDistritoPress(distrito,cidade)}/>)}
                </ScrollView>
         </View>
     </View>
  )
}

export default Distritos



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
    }
  
  }); 