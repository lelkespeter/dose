import {StyleSheet, Text, View} from "react-native";
import React from "react";

const SelectionMade = () => {
  return (
    <View>
      <Text style={styles.text}>Selection Made</Text>
    </View>
  );
};

export default SelectionMade;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
