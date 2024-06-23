import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./component/weather";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Please wait a moment. Fetching the weather data</Text>
      ) : (
        <View>
          <Weather />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666362",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
