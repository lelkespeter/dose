import {StyleSheet, Text, View} from "react-native";
import React from "react";

import {DRUGS} from "../constants/data";
import DoseInMl from "../villkor/DoseInMl";
import QuantityToGive from "../villkor/QuantityToGive";

const DrugDetails = ({route}) => {
  const drugId = route.params.drugId;

  const selectedDrug = DRUGS.find((lm) => lm.drugId === drugId);

  const strength = selectedDrug.styrka.charAt(selectedDrug.styrka.length - 5);
  const ml = DoseInMl(selectedDrug);
  const dos = QuantityToGive(selectedDrug);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{color: "white"}}>
            {selectedDrug.drugName} {selectedDrug.styrka}
          </Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{dos}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}> {ml}</Text>
        </View>
        <View>
          {selectedDrug.recept ? (
            <Text style={{color: "white"}}>
              Spädning: {selectedDrug.recept}
            </Text>
          ) : null}
        </View>
        <View>
          {selectedDrug.obs ? (
            <Text style={{color: "red", fontSize: 16, fontWeight: "bold"}}>
              OBS: {selectedDrug.obs}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};
export default DrugDetails.js;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    marginVertical: 9,
    marginHorizontal: 22,
  },
});
