import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Inicio';
import Productos from '../screens/Productos';
import Clientes from '../screens/Clientes';

const Stack = createNativeStackNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="Clientes" component={Clientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}