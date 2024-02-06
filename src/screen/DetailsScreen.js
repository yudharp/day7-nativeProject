// components/DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.thumbnail} />
      <View style={styles.userInfo}>
        <Text>{`${user.name.first} ${user.name.last}`}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Gender: {user.gender}</Text>
        <Text>Phone: {user.phone}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
});

export default DetailsScreen;
