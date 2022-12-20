import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';


import Home from '../screens/Home';
//import Search from '../screens/Search';
import About from '../screens/About';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator screenOptions={{ headerShown: false}} tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
       { /*<Tab.Screen name="Search" component={Search} />*/ }
        <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
);