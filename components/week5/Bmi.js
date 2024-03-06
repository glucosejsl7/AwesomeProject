import React from "react";
import { StyleSheet,View, Button, Text, TextInput, TouchableOpacity  } from "react-native";
import  { useState } from "react";

export default function Bmi() {
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [description, setDescription ] = useState('');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
        console.log(bmi);		//Print ค่าเก่าออกมา
        console.log(output);	

    let description = "bmi";
        if (bmi<18.5)
                description ="Underweight - eat a bagel!";
        else if (bmi>=18.5 && bmi<=24.99)
                description ="Normal - keep it up!";
        else if (bmi>=25 && bmi<=29.99)
                description ="Overweight - exercise more!";
        else if (bmi>=30 && bmi<=39.99)
                description ="Obese - get off the couch!";
        else
                description ="Morbidly Obese - take action!";
        setDescription(description);


    };

    return (
        <View>
            {/* ก้อนที่ 1 */}
            <View style={{ backgroundColor: "#FFC300", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontsize: 20 }}>Weight (Kg.)</Text>
                <TextInput 
                style={{ fontSize: 20 }} 
                keyboardType="numeric" 
                placeholder="Input your Weight ..."
                onChangeText={ (newWeight) => setWeight(newWeight) }/>

            </View>
             {/* ก้อนที่ 2 */}
             <View style={{ backgroundColor: "#FFC300", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around"}}>
                <Text style={{ fontsize: 20}}>Height (m.)</Text>
                <TextInput 
                style={{ fontSize: 20 }} 
                keyboardType="numeric" 
                placeholder="Input your Height ..."
                onChangeText={ (newHeight) => setHeight(newHeight) }/>


            </View>
             {/* ก้อนที่ 3 */}
             <View style={{ flexDirection: "row", marginVertical: 10}}>
                {/* ซ้าย */}
                <View style={{flex:1, backgroundColor: "#FEF9E7",borderRadius: 10, marginRight: 10, height: 100, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{ fontSize : 30}}>BMI : {bmi}</Text>
                </View>
                {/* ขวา */}
                <View style={{flex:1, backgroundColor: "#FEF9E7",borderRadius: 10, marginRight: 10, height: 100, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{ fontSize : 20}}>{description}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "#FF5733", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
