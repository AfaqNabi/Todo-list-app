import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.Button}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonConatainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    width: "90%",
    borderBottomColor: "#f0f",
    borderWidth: 1,
    padding: 10,
  },
  buttonConatainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button:{
    width:"40%"
  }
});
export default GoalInput;
