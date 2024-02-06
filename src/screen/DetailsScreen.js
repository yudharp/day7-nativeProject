// components/DetailsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import User from '../components/User'; // Import komponen User

const DetailsScreen = ({ route,navigation }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <User user={user} isDetailPage={true} pressItem={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default DetailsScreen;
