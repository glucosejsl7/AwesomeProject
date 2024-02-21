import React from 'react';
import MyIcon from '../week3/MyIcon';
import { Text, View } from 'react-native';

export default function Section5() {
    return (

<View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={25} color="#15B8BA" />
        <MyIcon title="coffee" name="coffee" size={25} color="#15B8BA" />
        <MyIcon title="bath" name="bath" size={25} color="#15B8BA" />
        <MyIcon title="car" name="car" size={25} color="#15B8BA" />
        <MyIcon title="paw" name="paw" size={25} color="#15B8BA" />
      </View>

    );
}

