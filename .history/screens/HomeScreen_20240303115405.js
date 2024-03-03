import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const items = ['Item 1', 'Item 2', 'Item 3'];

const HomeScreen = ({ navigation, route }) => {
    const[items,setItems] = useState([])
    const[selectedItem, setSelectedItem] = useState()
    
   useEffect(()=>{
   (async()=>{
      const items = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await items.json()
      setItems(posts)
    })()

    },[])


    useEffect(()=>{
         if(route?.params?.updatedText){
            let updatedItems = items.map((item)=>{
               if(item.id ===selectedItem.id){
                return {...item,title:updatedText}
               }
               else {
                return item
               }
            })
            
            setItems(updatedItems)
        }
    },[route])

  const handleItemPress = (item) => {
    setSelectedItem(item)
    navigation.navigate('Edit', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => handleItemPress(item)} style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <AntDesign name="edit" size={24} color="black" />
    </TouchableOpacity>
  );

  function trimAndCapitalize(str) {
    const words = str.trim().split(/\s+/);
    const trimmedWords = words.slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return trimmedWords.join(' ');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        ListHeaderComponent={<View style={styles.dummyView}></View>}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dummyView:{
    height:20
  }
});

export default HomeScreen;
