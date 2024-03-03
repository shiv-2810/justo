// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const items = ['Item 1', 'Item 2', 'Item 3'];

function HomeScreen({ navigation }) {
  const handleItemPress = (item) => {
    navigation.navigate('Edit', { item });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default HomeScreen;
