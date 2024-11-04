//Config
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//Hooks
import useProductos from '../hooks/useProductos';
//Componentes
import LoadingSpinner from "../components/LoadingSpinner";

export default function Productos() {
  const { productos, cargando, error } = useProductos();

  if (cargando) return <LoadingSpinner />
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.itemText}>{item.descripcion}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },
});
