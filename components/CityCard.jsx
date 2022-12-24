import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import { cores } from '../style/globalStyle';
import { Entypo,FontAwesome,Ionicons } from '@expo/vector-icons';



const CityCard = ({cidade,onPress}) => {
    

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons name="location" size={24} color={cores.branco} />
       <Text style={styles.cityNameText}>{cidade.nome}</Text>
       <Entypo name="chevron-small-right" size={30} color={cores.branco} />
    </TouchableOpacity>
  )
}

export default CityCard

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: cores.verde,
        elevation: 3,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: cores.marcador, 
        flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
      cityNameText:{
      
      fontSize: 18,
      color: cores.branco,
    },
    subTitle:{
        fontWeight:'bold',
        fontSize: 18,
        color: cores.branco,
    }
  
  }); 