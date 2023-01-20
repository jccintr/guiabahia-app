import React, {useState,useEffect} from 'react'
import { StyleSheet,View,Text,ScrollView,TouchableOpacity,StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { cores } from '../style/globalStyle';
import CategoryCard from '../components/CategoryCard';
import { database } from '../firebaseConfig';
import { collection,onSnapshot, orderBy, query} from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import SearchField from '../components/SearchField';
//import { StatusBar } from 'expo-status-bar';

const Categorias = ({route}) => {
   const navigation = useNavigation();
   const {cidade,distrito} = route.params;
   const [categorias,setCategorias] = useState([]);
   const [searchText,setSearchText] = useState('');

   useEffect(()=>{
    const collectionRef = collection(database,'Categorias');
   const q = query(collectionRef,orderBy('ordem','asc'));
  

    const unsuscribe = onSnapshot(q,querySnapshot => {
       setCategorias(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome, ordem: doc.data().ordem} )))
    })
 
  
    return unsuscribe;

}, []);    



  const onCategoryPress = (categoria) => {
   navigation.navigate('Contatos',{cidade: cidade,distrito:distrito,categoria:categoria});
}

/*
const sortCategory = (a,b) =>{

 
  if (a.ordem < b.ordem) return -1 ;
	if (a.ordem > b.ordem) return  1;

	
  if (a.ordem == b.ordem){
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
  }

}

*/



  return (
     <View style={styles.container}>
           <StatusBar
            animated={true}
            backgroundColor={cores.background}
            barStyle="light-content"
          />
          <Header title={cidade.nome} subTitle={distrito.nome}/>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
         <View style={styles.body}>
               <SearchField
                    placeholder="Digite uma Categoriaa"
                    value={searchText}
                    onChangeText={t=>setSearchText(t)}
                />
                {/*<Text style={{width:'100%',textAlign: 'left',marginBottom: 10,fontSize:16,color:cores.verde}}>Escolha uma categoria:</Text>*/}
                <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                  {categorias.filter((categoria)=>categoria.nome.toUpperCase().includes(searchText.toUpperCase())).sort((a,b)=> (a.ordem - b.ordem || a.nome.localeCompare(b.nome))).map(categoria => <CategoryCard key={categoria.id} categoryName={categoria.nome} onPress={()=>onCategoryPress(categoria)}/>)}
                </ScrollView>
               
         </View>
     </View>
  )
}

export default Categorias



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
    }
  
  }); 