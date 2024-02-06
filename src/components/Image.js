
import React from 'react';
import { Image, View } from 'react-native';

const BasicImage = () => {
    return ( 
        <View>
        <Image
        source={{
            uri: 'https://images-tm.tempo.co/all/2021/11/01/786304/786304_1200.jpg',
        }}
        style={{ width: 300, height: 150}}
        />
        </View>
);
    };
export default BasicImage;