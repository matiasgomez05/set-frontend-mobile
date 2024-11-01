import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ir a Productos" onPress={() => navigation.navigate('Productos')} />
    </View>
  );
}