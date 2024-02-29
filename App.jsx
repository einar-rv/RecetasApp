//Código para aplicación movil con una API de Spoonacular de recetas de comida
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',

      headers: {
        'x-rapidapi-key': 'f5e7f4e1f3mshb5e7e3b5a0f1d3cp1f3e3ejsn3d7a3f3e3b5',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
  };
  //Función para obtener las recetas
  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas</Text>
      <TextInput style={styles.input} value={search} onChangeText={text => setSearch(text)} />
      <Button title="Buscar" onPress={() => setQuery(search)} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
 
