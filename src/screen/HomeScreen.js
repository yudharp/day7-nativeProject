import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=100');
        setUserData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { user: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.userContainer}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.thumbnail} />
        <View style={styles.userInfo}>
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredData = userData.filter(item =>
    `${item.name.first} ${item.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cari berdasarkan nama"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* FlatList untuk menampilkan data */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});

export default HomeScreen;
