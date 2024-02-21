import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
    
        <View style={{borderBottomWidth : 0.5 , paddingBottom : 6,marginLeft : 20, marginRight : 20}}>
            <View style={{marginTop : 10, marginBottom :5}}  >
                <Text style={{ fontSize : 16 }} >Room Type</Text>
            </View>
            <View style={{ flexDirection : 'row'}}>
                    <Image style={{ width: 80, height: 120, borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")} />
                    <View style={{ paddingLeft: 10, marginTop : 5  }}>
                        <Text style={{ fontSize: 20}}>Standard Twin Room</Text>
                        <Text marginTop={35} style={{ fontSize : 20, color: "red" }}>$399.99</Text>
                        <Text style={{ fontSize : 14, color :"#15B8BA" }}>Hurry Up! This is your last room!</Text>
                    </View>
            </View>
        </View>
    );
}

