import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from "../screens/Preload";
import MainTab from "./MainTab";
import Categorias from "../screens/Categorias";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Preload">
        <Stack.Screen  name="Preload" component={Preload}/>
        <Stack.Screen  name="Categorias" component={Categorias}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
    </Stack.Navigator>
  )
}

export default MainStack
