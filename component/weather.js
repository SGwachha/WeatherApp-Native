import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function Weather({ stateData }) {
  const { cityTitle, cityTemp, windSpeed } = stateData;

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>Locaition: {cityTitle}</Text>
       <View style={styles.titleContainer}>
       <MaterialCommunityIcons
          size={48}
          name="weather-sunny"
          color={"#f7b733"}
        />
        <Text style={styles.tempText}>
          {cityTemp}˚
        </Text>
       </View>
       <View style={styles.titleContainer}>
       <Feather name="wind" size={24} color="black" />
       <Text style={styles.tempText}>
          {windSpeed}kmph
        </Text>
       </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>So Sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  bodyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  tempText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
