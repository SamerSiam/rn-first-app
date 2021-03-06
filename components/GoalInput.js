import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});
export default GoalInput;
