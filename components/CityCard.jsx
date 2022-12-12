import { StyleSheet, SafeAreaView,View,Text,ScrollView, TouchableOpacity} from 'react-native';
import { cores } from '../style/globalStyle';
import { Entypo,FontAwesome,Ionicons } from '@expo/vector-icons';


const CityCard = ({cityName}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Ionicons name="location" size={24} color={cores.azul} />
       <Text style={styles.cityNameText}>{cityName}</Text>
       <Entypo name="chevron-small-right" size={30} color={cores.azul} />
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