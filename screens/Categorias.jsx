import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import CategoryCard from '../components/CategoryCard';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query} from 'firebase/firestore';

const Categorias = ({route}) => {
   const navigation = useNavigation();
   const {cidade,distrito} = route.params;
   const [categorias,setCategorias] = useState([]);

   useEffect(()=>{
    const collectionRef = collection(database,'Categorias');
    const q = query(collectionRef, orderBy('nome','asc'));
    const unsuscribe = onSnapshot(q,querySnapshot => {
       setCategorias(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome} )))
    })
  //  setIsLoading(false);
    return unsuscribe;

}, []);    



  const onCategoryPress = (categoria) => {
   navigation.navigate('Contatos',{cidade: cidade,distrito:distrito,categoria:categoria});
}

  return (
     <View style={styles.container}>
          <Header title={cidade.nome} subTitle={distrito.nome}/>
        
         <View style={styles.body}>
                <Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.azul}}>Escolha uma categoria:</Text>
                <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                  {categorias.map(categoria => <CategoryCard key={categoria.id} categoryName={categoria.nome} onPress={()=>onCategoryPress(categoria)}/>)}
                </ScrollView>
               
         </View>
     </View>
  )
}

export default Categorias



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