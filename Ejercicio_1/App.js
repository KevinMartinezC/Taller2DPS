import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons, FontAwesome, Foundation } from '@expo/vector-icons';
import Series from "./components/Series";
import Proximamente from "./components/Proximamente";
import Peliculas from "./components/Peliculas";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Peliculas"
      screenOptions={{
        tabBarActiveTintColor: '#2976f2',
        tabBarActiveBackgroundColor: "#a7adb8",
        tabBarInactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: "#000000"
      }}
    >
      <Tab.Screen
        name="Peliculas"
        component={Peliculas}
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="video-camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Proximamente"
        component={Proximamente}
        options={{
          tabBarLabel: 'Proximamente',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="next" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}