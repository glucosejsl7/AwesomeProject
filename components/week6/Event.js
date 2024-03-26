import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Image, Text, View } from "react-native";
import { FlatList } from 'react-native'

export default function TourFlatListOnline(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
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
            <Text style={{ fontSize : 20}}>Update Comimg Event...</Text>
            <Text style={{ color : 'grey', marginVertical : 10 }} >What's the Worst That could Happend</Text>
            <FlatList
                horizontal={true}
                data={ onlineTours }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginRight: 10}}>
                                    <Image source={{ uri: item.uri }} style={{ width : Dimensions.get("screen").width/1.5, height: 200, borderRadius: 10 }} />
                                    <View style={{ marginTop: -30, height: 80,width : Dimensions.get("screen").width/1.5, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, paddingVertical: 4 , borderWidth : 0.5, borderColor : 'Grey'}}>
                                        <View style={{ flexDirection : 'row' }}>
                                            <View style={{ flexDirection :'column',marginHorizontal : 5, marginVertical : 5}}>
                                                <Text style={{ fontSize: 18, color: 'red' }}>{item.month}</Text>
                                                <Text style={{ fontSize: 14, color: 'grey', paddingHorizontal : 10}}>{item.date}</Text>

                                            </View>
                                            <View style={{ flexDirection :'column',marginHorizontal : 10, marginVertical : 5}}>
                                                <Text style={{ fontSize: 18, color: 'black' }}>{item.title}</Text>
                                                <Text style={{ fontSize: 12, color: 'grey' }}>{item.datetime}</Text>
                                                <Text style={{ fontSize: 12, color: 'grey' }}>{item.place}</Text>
                                            </View>
                                        </View>
                                        
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
