import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ flexDirection : 'row', margin : 12, marginTop : 5 , padding : 10 }}>
                <View style={{ height: 60, width: 60, borderRadius: 60/2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color : "white" }}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10, marginTop : 5  }}>
                    <Text style={{ fontSize: 20, color : 'red' }}>Excellent</Text>
                    <Text style={{ fontSize : 14 }}>See 801 reviews</Text>
                </View>
        </View>
    );
}

