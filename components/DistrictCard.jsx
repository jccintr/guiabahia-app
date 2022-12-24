import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import { cores } from '../style/globalStyle';
import { Entypo } from '@expo/vector-icons';



const DistrictCard = ({distrito,onPress}) => {
    

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
       
       <Text style={styles.cityNameText}>{distrito.nome}</Text>
       <Entypo name="chevron-small-right" size={30} color={cores.branco} />
    </TouchableOpacity>
  )
}

export default DistrictCard

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