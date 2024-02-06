import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const User = ({ isDetailPage = false, user, pressItem }) => (
  <TouchableOpacity onPress={pressItem}>
    <View style={styles.userContainer}>
      <Image source={{ uri: user.picture.thumbnail }} style={styles.thumbnail} />
      <View style={styles.userInfo}>
        <Text>{`${user.name.first} ${user.name.last}`}</Text>
        {isDetailPage && (<View>
            <Text>{user.location.country}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.location.city}, {user.location.country}</Text>
        </View>)}
     
      </View>
    </View>
  </TouchableOpacity>
);

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
    // flex: 1,
  },
});

export default User;
