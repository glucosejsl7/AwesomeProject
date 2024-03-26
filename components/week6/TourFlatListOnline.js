import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Image, Text, View } from "react-native";
import { FlatList } from 'react-native'
import TourItem from "./TourItem";

export default function TourFlatListOnline(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20}}>Tour with FlatList</Text>
            <Text style={{ color : 'grey', marginVertical : 10 }} >Let find out what most interesting things</Text>
            <FlatList
                horizontal={true}
                data={ onlineTours }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginRight: 10}}>
                                    <Image source={{ uri: item.uri }} style={{ width : Dimensions.get("screen").width/2.0, height: 150, borderRadius: 10 }} />
                                    <View style={{ marginTop: -30, height: 30,width : Dimensions.get("screen").width/2.0, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                                    </View>
                                </View>
                                
                            </View>
                            

                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );

}
