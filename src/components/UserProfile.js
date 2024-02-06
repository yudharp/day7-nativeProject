import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = ({ user, showName = true, showAge = true, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: user.picture.thumbnail }} style={styles.thumbnail} />
        <View style={styles.userInfo}>
          {showName && <Text>{`${user.name.first} ${user.name.last}`}</Text>}
          {showAge && <Text>{`${user.dob.age} years old`}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
});

export default UserProfile;
