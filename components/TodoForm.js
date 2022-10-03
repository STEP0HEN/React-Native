import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const TodoForm = ({ handleSubmit }) => {
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e);
  };
  return (
    <View>
      <TextInput placeholder="add new todo" onChangeText={changeHandler} />
      <Button
        title="add todo"
        color="#0000FF"
        onPress={() => handleSubmit(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default TodoForm;
