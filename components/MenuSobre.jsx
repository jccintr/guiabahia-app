import React from 'react'
import { StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons,Feather,Ionicons } from '@expo/vector-icons';
import { cores } from '../style/globalStyle';


const Icone = ({iconName,iconProvider}) => {

  
    switch (iconProvider) {
        case 'Ionicons':
            return <Ionicons name={iconName} size={22} color={cores.branco} />;
            break;
        case 'Feather':
            return <Feather name={iconName} size={22} color={cores.branco} />;
            break;
        case 'AntDesign':
            return <AntDesign name={iconName} size={22} color={cores.branco} />;
            break;
        case 'FontAwesome':
            return <FontAwesome name={iconName} size={22} ccolor={cores.branco} />;
             break;
        case 'MaterialIcons':
            return <MaterialIcons name={iconName} size={22} color={cores.branco}  />;
             break;
        case 'Entypo':
            return <Entypo name={iconName} size={22} color={cores.branco}  />;
            break;
       case 'Octicons':
             return <Octicons name={iconName} size={22} color={cores.branco} />;
             break;

        default:
          console.log(`icone não encontrado`);
      }




}



const MenuSobre = ({iconProvider,iconName,label,onPress}) => {
  return (
    <TouchableOpacity style={styles.menuArea} onPress={onPress}>
      <Icone iconName={iconName} iconProvider={iconProvider}/>
      <Text style={styles.labelText}>{label}</Text>
      <Entypo name="chevron-small-right" size={24} color={cores.branco} />
    </TouchableOpacity>
  )
}

export default MenuSobre


const styles = StyleSheet.create({

    menuArea:{
       width: '90%',
       height: 50,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
    },
   labelText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: cores.branco
   }



  });
