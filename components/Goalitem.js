import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#bcd",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
