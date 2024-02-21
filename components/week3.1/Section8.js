import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Section8() {
    return (
    
        <View style={{borderBottomWidth : 0.5, paddingBottom : 6,}}>
            <View style={{ flexDirection : 'row', marginLeft : 10}}>
                    <View style={{ paddingLeft: 10, marginTop : 5  }}>
                        <Text style={{ fontSize: 12}}>Price</Text>
                        <Text style={{ fontSize : 20, color: "red" }}>$399.99</Text>
                        <Text style={{ fontSize : 12}}>AVG/Night</Text>

                    </View>
                    <View style={{ marginTop: 10, marginLeft : 210}}>
                    <Button style={{ height: 60, width: 130, borderRadius: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, color : "white" }}>Book Now</Text>
                    </Button>
                    </View>
            </View>
        </View>
    );
}

