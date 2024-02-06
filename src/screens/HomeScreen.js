// components/Homescreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button} from 'react-native';
import axios from 'axios';
const baseUrl = "https://randomuser.me/api/?results=30";


const HomeScreen = ({ navigation}) => {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        try{
        axios.get('${baseUrl}').then((response) => {
            //console.log('response: ', response.data.results);
          });
        }catch(error){
            console.log(error)
        }
    }, []);

    return (
        
        <View style = {{ flex :1 , justifyContent : 'center', alignItems: 'center'}}>    
        <Text>Hello</Text>
        <Text>Home Screen</Text>
        <Text>{quote[0]}</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigation('Details')}
        />

        {qoute.map(quote => (
        <View key={quote.login.uuid}>
          <Image source={{ uri: user.picture.large }} style={{ width: 50, height: 50 }} />
          <Text>{${quote.name.first} ${quote.name.last}}</Text>
          <Text>Email: {quote.email}</Text>
          <Text>Location: {${quote.location.city}, ${quote.location.country}}</Text>
        </View>
         ))}

        </View>

    );
};

export default HomeScreen;