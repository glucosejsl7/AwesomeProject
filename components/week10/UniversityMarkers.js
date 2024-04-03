import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function UniversityMarkers(props) {
    

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.user_id}
    >
        <FontAwesome name="university" size={20} color="tomato" />
        {/* <Ionicons name="person" size={24} color="red" /> */}
    </Marker>

    
  ));
}
