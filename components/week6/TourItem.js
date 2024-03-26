import React from "react";
import { Image, Text, View,Dimensions } from "react-native";


export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10}}>
            <Image source={{ uri: props.item.uri }} style={{ width : Dimensions.get("screen").width/2.0, height: 150, borderRadius: 10 }} />
            <View style={{ marginTop: -30, height: 30,width : Dimensions.get("screen").width/2.0, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                <Text style={{ fontSize: 16, color: 'white' }}>{props.item.title}</Text>
            </View>
        </View>
        
    );
}
