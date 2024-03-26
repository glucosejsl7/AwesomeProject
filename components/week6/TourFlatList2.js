import React from "react";
import { Dimensions } from "react-native";
import { Image, Text, View } from "react-native";
import { FlatList } from 'react-native'
import TourItem from "./TourItem";

export default function TourFlatList2(props) {
    const tours = [ 
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const screenWidth = Dimensions.get("screen").width;
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour with FlatList</Text>
            <Text style={{ color: 'grey', marginVertical: 10 }}>Let's find out what's most interesting</Text>
            <FlatList
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={tours}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ marginBottom: 10, width: screenWidth / 2 - 15 }}>
                            <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 2.0 - 25, height: 150, borderRadius: 10 }} />
                            <View style={{ marginTop: -30, height: 30, width: Dimensions.get("screen").width / 2.0 - 25 , backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                                <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
