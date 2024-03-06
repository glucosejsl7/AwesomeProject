import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import  { useState } from "react";

export default function Heartbeat() {    
    const [count , setCount] = useState(0);

    console.log("STATE : ", count);

    const onPressButton = () => {
            setCount(count + 1);
    };

    return (
        <View style = {{flexDirection: "row", marginVertical: 10}}>
            <View style = {{flex: 1, padding:20, justifyContent: "space-between", alignItems: "center"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={40} color="#DAF7A6" />
                </TouchableOpacity>
            </View>

            <View style = {{flex: 1, padding:20, justifyContent: "space-between",  alignItems: "center"}}>
                    <Text style={{ fontSize : 35 , color : '#DAF7A6'}}>{count}</Text>
            </View>
        </View>
    );
}