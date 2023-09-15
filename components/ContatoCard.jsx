import { StyleSheet,Text,TouchableOpacity} from 'react-native';
import { cores } from '../style/globalStyle';


const ContatoCard = ({contato,onPress}) => {
   

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
       <Text style={styles.contactNameText}>{contato.nome}</Text>
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
        backgroundColor: cores.verde,
        elevation: 3,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: cores.marcador, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
     contactNameText:{
      fontSize: 18,
      color: cores.branco,
    },
    subTitle:{
        fontWeight:'bold',
        fontSize: 18,
        color: cores.branco,
    }
  
  }); 