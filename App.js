import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Alert} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import MedicinesCategoriesScreen from "./screens/MedicinesCategoriesScreen";
import MedicinesInCategory from "./screens/MedicinesInCategory";
import DrugDetailsScreen from "./screens/DrugDetailsScreen";
import AppContextProvider from "./context/AppContext";
import StartScreen from "./screens/StartScreen";
import IconButton from "./components/IconButton";
import SelectedMedicinesScreen from "./screens/SelectedMedicinesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  function pressHandler() {
    Alert.alert("pressed");
  }

  return (
    <>
      <StatusBar style="light" />
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: "#022206"},
              headerTintColor: "#cccccc",
              contentStyle: {backgroundColor: "#04430c"},
            }}
          >
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen
              name="Kategorier"
              component={MedicinesCategoriesScreen}
              options={{
                title: "Läkemedels Kategorier",
              }}
            />
            <Stack.Screen name="Drugs" component={MedicinesInCategory} />
            <Stack.Screen
              name="List"
              component={DrugDetailsScreen}
              options={{title: "Mediciner och Doser"}}
            />
            <Stack.Screen name="Vald" component={SelectedMedicinesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
