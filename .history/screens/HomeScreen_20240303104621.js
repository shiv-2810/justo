import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const items = ['Item 1', 'Item 2', 'Item 3'];

const HomeScreen = ({ navigation }) => {
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
        let updatedText = navigation?.route?.params?.updatedText
         if(updatedText){
            let updatedItems = items.map((item)=>{
               if(item.userId ===selectedItem.userId){
                return {...item,title:updatedText}
               }
               else {
                return item
               }
            })
            
            setItems(updatedItems)
        }
    },[navigation])

  const handleItemPress = (item) => {
    setSelectedItem(item)
    navigation.navigate('Edit', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <AntDesign name="edit" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
