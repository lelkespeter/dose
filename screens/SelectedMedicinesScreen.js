import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

import SelectionMade from "../components/SelectionMade";
import NoSelection from "../components/NoSelection";

const SelectedMedicinesScreen = () => {
  const {selectedDrug, setSelectedDrug} = useContext(AppContext);
  return selectedDrug === [] ? <SelectionMade /> : <NoSelection />;
};

export default SelectedMedicinesScreen;

const styles = StyleSheet.create({});
