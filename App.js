import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "learn react native", key: "1" },
    { text: "learn more react native", key: "2" },
    { text: "take a break", key: "3" },
  ]);
  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };

  const handleDelete = (key) => {
    setTodos((prevTodos) => {
      return todos.filter((todo) => todo.key != key);
    });
  };
  return (
    <View style={styles.container} testID={"my-test"}>
      <Header />
      <View style={styles.content}>
        <TodoForm handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handleDelete={handleDelete} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
