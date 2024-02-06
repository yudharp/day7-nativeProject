
// // components/HomeScreen.js 
// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const HomeScreen=({ navigation }) => {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Home Screen</Text>
//         <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate ('Details')}
//         />
//         </View>
//     );
//     };
// export default HomeScreen;

// import React, { useEffect, useState } from 'react';
// import { Image, View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://randomuser.me/api/?results=100');
//         const result = await response.json();
//         setUserData(result.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       <View style={styles.container}>
//         {userData.map((user, index) => (
//           <View key={index} style={styles.userContainer}>
//             <Image
//               source={{ uri: user.picture.medium }}
//               style={styles.image}
//             />
//             <Text>{`${user.name.title}. ${user.name.first} ${user.name.last} \n ${user.dob.age}\n${user.gender}`}
//             </Text>


//           </View>
//         ))}
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     scrollViewContent: {
//       flexGrow: 1,
//       justifyContent: 'center',
//       paddingBottom: 20,
//     },
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     userContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginVertical: 5,
//       padding: 10,
//       borderRadius: 10,
//       width: '90%',
//       backgroundColor: '#f0f0f0',
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//     },
//     userInfoContainer: {
//       marginLeft: 20,
//     },
//     image: {
//       width: 60,
//       height: 60,
//       borderRadius: 10,
//       alignItems: 'center',
//     },
//     nameText: {
//       fontSize: 10,
//       fontWeight: 'bold',
//       marginBottom: 5,
//       marginLeft: 20,
//       alignItems: 'center',
//     },
//     detailsText: {
//       fontSize: 10,
//       color: '#555',
//       marginRight: 20,
//       alignItems: 'center',
//     },
//   });
  

// export default HomeScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import UserProfile from './components/UserProfile';

// const HomeScreen = ({ navigation }) => {
//   const [userData, setUserData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // State to track loading status

//   useEffect(() => {
//     const fetchLoadingData = async () => {
//       // Call loading API here
//       try {
//         // Simulate loading delay for 5 seconds
//         setTimeout(() => {
//           console.log("Loading API call completed");
//           fetchData(); // Call the main API after loading API call completes
//         }, 5000); // 5000 milliseconds = 5 seconds
//       } catch (error) {
//         console.error('Error fetching loading data:', error);
//         setIsLoading(false); // Set loading state to false if loading API call fails
//       }
//     };

//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://randomuser.me/api/?results=100');
//         setUserData(response.data.results);
//         setIsLoading(false); // Set loading state to false after data fetch
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false); // Set loading state to false if main API call fails
//       }
//     };

//     fetchLoadingData(); // Call the loading API first
//   }, []);

//   const navigateToDetails = (item) => {
//     navigation.navigate('Details', { user: item });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigateToDetails(item)}>
//       <View style={styles.userContainer}>
//         <Image source={{ uri: item.picture.thumbnail }} style={styles.thumbnail} />
//         <View style={styles.userInfo}>
//           <Text>{`${item.name.first.charAt(0)} ${item.name.last.charAt(0)}`}</Text>
//           <Text>{item.email}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading, sabar dong ...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={userData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   userContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   thumbnail: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import LoadingIndicator from './src/components/LoadingIndicator';
import UserProfile from './src/components/UserProfile';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchLoadingData = async () => {
      // Call loading API here
      try {
        // Simulate loading delay for 5 seconds
        setTimeout(() => {
          console.log("Loading API call completed");
          fetchData(); // Call the main API after loading API call completes
        }, 5000); // 5000 milliseconds = 5 seconds
      } catch (error) {
        console.error('Error fetching loading data:', error);
        setIsLoading(false); // Set loading state to false if loading API call fails
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=100');
        setUserData(response.data.results);
        setIsLoading(false); // Set loading state to false after data fetch
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading state to false if main API call fails
      }
    };

    fetchLoadingData(); // Call the loading API first
  }, []);

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { user: item });
  };

  const renderItem = ({ item }) => (
    <UserProfile 
      user={item} 
      showName={true}  // Set to true to show name
      showAge={false}  // Set to false to hide age
      onPress={() => navigateToDetails(item)} 
    />
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
