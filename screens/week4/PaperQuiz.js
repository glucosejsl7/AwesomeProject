import React from "react";
import { Image, ScrollView, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Button, Card, Divider, Icon, IconButton, Text } from "react-native-paper";

export default function PaperQuiz() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
    <Card >
        <Card>
            <Card.Cover style={{borderRadius: 0}} source={require("../../assets/week3/room-6.jpg")} />
        </Card>
        <Card style={{marginTop : -30, backgroundColor : '#F5F5F5', marginHorizontal : 20}}>
            <Card.Content >
                <Text style={{ textAlign : 'center', fontSize : 20 }}>Hilton San Francisco</Text>
                <View style={{ flexDirection : "row", justifyContent : 'center' }}>
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star" size={20} color="orange" />
                        <FontAwesome name="star-half" size={20} color="orange" />
                    </View>
                    <Text style={{ textAlign : 'center', fontSize : 13 }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </Card.Content>
        </Card>

        <View style={{ flexDirection : 'row', margin : 12, marginTop : 5 , padding : 10 }}>
            <View style={{ height: 60, width: 60, borderRadius: 60/2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color : "white" }}>9.5</Text>
            </View>
            <View style={{ paddingLeft: 10, marginTop : 5  }}>
                <Text style={{ fontSize: 20, color : 'red' }}>Excellent</Text>
                <Text style={{ fontSize : 14 }}>See 801 reviews</Text>
            </View>
        </View>

        <View style={{ borderTopWidth : 0.5, borderBottomWidth : 0.5, paddingTop : 6, paddingBottom : 9, marginLeft : 20, marginRight : 20 ,marginTop : -5}}>
            <View >
                <Text variant="titleMedium">Hotel Description</Text>
            </View>
            <View >
            <Text variant="bodyMedium">218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>

        <View style={{ flexDirection : "column", marginTop : 10, borderBottomWidth : 0.5, marginHorizontal : 20}}>
            <View style={{ flexDirection : "row", justifyContent:"space-around"}}>
                <Icon  source="wifi" Tit color={"#15B8BA"} size={30} />
                <Icon source="coffee" color={"#15B8BA"} size={30} />
                <Icon source="shower" color={"#15B8BA"} size={30} />
                <Icon source="car" color={"#15B8BA"} size={30} />
                <Icon source="paw" color={"#15B8BA"} size={30} />
            </View>
            <View style={{ flexDirection : "row", justifyContent:"space-around", marginBottom :10}}>
                <Text variant="bodySmall">wifi</Text>
                <Text variant="bodySmall">coffee</Text>
                <Text variant="bodySmall">bath</Text>
                <Text variant="bodySmall">car</Text>
                <Text variant="bodySmall">paw</Text>
            </View>
        </View>
       
            <Card.Title  title="Location" titleVariant="titleMedium" subtitle="218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore" />
            <Card.Cover style={{  marginHorizontal : 20}} source={require('../../assets/week3/trip-2.jpg')} />
   
        
            <View style={{ borderTopWidth : 0.5, paddingBottom : 6,marginLeft : 20, marginRight : 20, marginTop : 10}}>
            <View style={{marginTop : 10, marginBottom :5}}  >
                <Text style={{ fontSize : 16 }} >Room Type</Text>
            </View>
            <View style={{ flexDirection : 'row'}}>
                    <Image style={{ width: 80, height: 120, borderRadius: 10 }} source={require("../../assets/week3/room-8.jpg")} />
                    <View style={{ paddingLeft: 10, marginTop : 5  }}>
                        <Text style={{ fontSize: 20}}>Standard Twin Room</Text>
                        <Text marginTop={35} style={{ fontSize : 20, color: "red" }}>$399.99</Text>
                        <Text style={{ fontSize : 14, color :"#15B8BA" }}>Hurry Up! This is your last room!</Text>
                    </View>
            </View>
        </View>

        <Card style={{borderRadius : 0, borderWidth : 0.25}}>
            <View style={{ flexDirection : 'row', marginLeft : 10}}>
                    <View style={{ paddingLeft: 10, marginTop : 5  }}>
                        <Text style={{ fontSize: 12}}>Price</Text>
                        <Text style={{ fontSize : 20, color: "red" }}>$399.99</Text>
                        <Text style={{ fontSize : 12}}>AVG/Night</Text>

                    </View>
                    <View style={{ marginTop: 10, marginLeft : 210 ,marginBottom : 6}}>
                    <Button style={{ height: 60, width: 130, borderRadius: 25, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, color : "white" }}>Book Now</Text>
                    </Button>
                    </View>
            </View>
        </Card>



    </Card>
    <Divider style={{ marginVertical : 10 }} />
    </ScrollView>
  );
}

