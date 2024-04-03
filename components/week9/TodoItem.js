import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TodoItem(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbox} onPress={() => props.onCheck(props.item.id)}>
                <FontAwesome name={props.item.completed ? "check-square" : "square-o"} size={23} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <TextInput
                    style={[styles.text, props.item.completed && styles.completedText]}
                    value={props.item.title}
                    placeholder="What's in your mind? "
                    onChangeText={(new_title) => props.onUpdate(new_title, props.item.id)}
                />
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => props.onDelete(props.item.id)}>
                <FontAwesome name="trash" size={23} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    checkbox: {
        flex: 2,
    },
    textContainer: {
        flex: 12,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'red', // Red color for completed todo item text
    },
    deleteButton: {
        flex: 1,
    },
});
