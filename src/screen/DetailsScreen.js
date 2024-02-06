// components/DetailScreen.js

// import React from "react";
// import {View, Text, StyleSheet,Image} from 'react-native'

// const DetailsScreen = () => {
//     return (
//         <View style = {styles.boxContainer}>
//             <Image
//                     source={require('../components/tes2.jpg')}
//                     style={styles.image}
//                 />
//         <View style={[styles.box, {backgroundColor: 'pink'}]}>
//         <Text style={{fontWeight:'bold', textAlign: 'center', color : 'blue' }}>Detail Screen</Text>
//         </View>
//         </View>

//     );
// };


// const styles = StyleSheet.create({
//     box: {
//       height: 50,
//       textAlign: 'center',
//       justifyItem : 'center',
//       alignItem : 'center',
//       marginVertical : 300,
//       flex : 0.5,
//       paddingHorizontal: 20,
//       paddingVertical: 16,
//       borderRadius: 100,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 10, 
//         resizeMode: 'cover', 
//         justifyContent : 'center',
//     },
//     boxContainer :{
//         justifyContent : 'center',
//         alignContent : 'center',
//         flexDirection: 'row',
//         height : 300,
//         flex : 1,
//     }
//   });
  
// export default DetailsScreen;

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
