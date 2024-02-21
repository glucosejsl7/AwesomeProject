import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
            <View style={{ borderTopWidth : 0.5, borderBottomWidth : 0.5, paddingTop : 6, paddingBottom : 6, marginLeft : 20, marginRight : 20 ,marginTop : 10}}>
                <View style={{}}>
                    <Text style={{ fontSize : 16}}>Location</Text>
                </View>
                <View >
                    <Text style={{ fontSize : 13 }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </View>
                <View style={{ flexDirection : "row" }}>
                    <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2 }} source={require("../../assets/week3/map.jpg")} />
                </View>

            </View>
    );
}

