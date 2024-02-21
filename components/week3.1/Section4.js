import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Section4() {
    return (
<View style={{ borderTopWidth : 0.5, borderBottomWidth : 0.5, paddingTop : 6, paddingBottom : 9, marginLeft : 20, marginRight : 20 ,marginTop : -5}}>
                <View style={{}}>
                    <Text style={{ fontSize : 16}}>Hotel Description</Text>
                </View>
                <View >
                    <Text style={{ fontSize : 13 }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </View>
            </View>
    );
}

