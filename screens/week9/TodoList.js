import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoItem from '../../components/week9/TodoItem';
import TodoStorage from '../../storages/TodoStorage';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const onLoad = async () => {
        try {
            let data = await TodoStorage.readItems();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onLoad();
    }, []);

    const onCreate = async () => {
        try {
            let new_data = {
                id: '_' + Math.random().toString(36).substr(2, 9),
                title: "",
                completed: false,
            };
            let updatedTodos = [...todos, new_data];
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    };     

    const onUpdate = async (new_title, id) => {
        try {
            let updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, title: new_title } : todo
            );
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    }; 

    const onCheck = async (id) => {
        try {
            // Find the todo item by id
            const updatedTodos = todos.map(todo => {
                if (todo.id === id) {
                    // Toggle the completed status
                    todo.completed = !todo.completed;
                }
                return todo;
            });
    
            // If checked, move the checked todo item to the bottom
            const checkedItemIndex = updatedTodos.findIndex(todo => todo.id === id);
            const checkedItem = updatedTodos.splice(checkedItemIndex, 1)[0];
            const todosWithCheckedAtBottom = [...updatedTodos, checkedItem];
    
            setTodos(todosWithCheckedAtBottom);
            await TodoStorage.writeItems(todosWithCheckedAtBottom);
        } catch (error) {
            console.log(error);
        }
    };
    

    const onDelete = async (id) => {
        try {
            let updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            await TodoStorage.writeItems(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    }; 


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "red",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} color={'white'} />
            </TouchableOpacity>
        </View>
    );
}
