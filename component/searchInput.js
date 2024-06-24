import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function SearchInput({ stateData }) {
  const { searchCity, setSearchCity } = stateData;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={searchCity}
          onChangeText={(val) => setSearchCity(val)}
          placeholder="Search City"
        />
      </TouchableOpacity>
    </View>
  );
}   

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      height: 40,
      fontSize: 16,
      color: "#000",
    },
  });
