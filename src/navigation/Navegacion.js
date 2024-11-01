import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from '../screens/Inicio';
import Productos from '../screens/Productos';
import Clientes from '../screens/Clientes';

const Drawer = createDrawerNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Inicio"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Productos" component={Productos} />
        <Drawer.Screen name="Clientes" component={Clientes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}