import { StyleSheet, SafeAreaView,View,Text,ScrollView, TouchableOpacity} from 'react-native';
import { cores } from '../style/globalStyle';
import { FontAwesome5 } from '@expo/vector-icons';



const ContatoCard = ({contactName,onPress}) => {
    

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
       
       <Text style={styles.cityNameText}>{contactName}</Text>
       <FontAwesome5 name="whatsapp" size={30} color={cores.azul} />
    </TouchableOpacity>
  )
}

export default ContatoCard

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: cores.cinzaClaro,
        elevation: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: cores.azul, 
        flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
      cityNameText:{
      fontWeight:'bold',
      fontSize: 18,
      color: cores.azul,
    },
    subTitle:{
        fontWeight:'bold',
        fontSize: 18,
        color: cores.branco,
    }
  
  }); 