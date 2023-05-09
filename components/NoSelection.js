import {StyleSheet, Text, View} from "react-native";
import React from "react";

const NoSelection = () => {
  return (
    <View>
      <Text style={styles.text}>No Selection</Text>
    </View>
  );
};

export default NoSelection;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
