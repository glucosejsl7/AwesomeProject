import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Section2() {
    return (
             <View style={{ margin : 15, marginTop : -35 , padding : 10, backgroundColor : '#F5F5F5', borderRadius : 10 , shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius: 2, elevation: 5 }}>
                <View style={{alignItems : "center"}}>
                    <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
                </View>
                <View style={{ flexDirection : "row", justifyContent : 'center' }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                <View >
                    <Text style={{ textAlign : 'center', fontSize : 13 }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
            </View>
  
    );
}