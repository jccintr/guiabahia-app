import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from "../screens/Preload";
import MainTab from "./MainTab";
import Categorias from "../screens/Categorias";
import Contatos from "../screens/Contatos";
import Distritos from "../screens/Distritos";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Preload">
        <Stack.Screen  name="Preload" component={Preload}/>
        <Stack.Screen  name="Categorias" component={Categorias}/>
        <Stack.Screen  name="Contatos" component={Contatos}/>
        <Stack.Screen  name="Distritos" component={Distritos}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
    </Stack.Navigator>
  )
}

export default MainStack
