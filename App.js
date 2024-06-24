import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./component/weather";
import SearchInput from "./component/searchInput";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityTitle, setCityTitle] = useState("");
  const [searchCity, setSearchCity] = useState("Nepal");
  const [cityTemp, setCityTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [forecastData, setForecastData] = useState([]);

  const API_KEY = "4fe43361b2dd1f066e31452c1dc1c3a3";

  const stateData = {
    isLoading,
    setIsLoading,
    setSearchCity,
    searchCity,
    cityTitle,
    setCityTitle,
    cityTemp,
    windSpeed,
    setWindSpeed,
    forecastData,
  };

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
        );
        const weatherData = await res.json();
        if (res.ok) {
          setCityTitle(weatherData?.name);
          setCityTemp(weatherData?.main?.temp);
          setWindSpeed(weatherData?.wind?.speed);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchForecast = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await res.json();
        if (res.ok) {
          const dailyForecast = forecastData.list.filter(
            (item, index) => index % 8 === 0
          );
          setForecastData(dailyForecast);
        }
      } catch (err) {
        console.error(err);
      }
    };

    setIsLoading(true);
    Promise.all([fetchCurrentWeather(), fetchForecast()]).then(() => {
      setIsLoading(false);
    });
  }, [searchCity]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Please wait a moment. Fetching the weather data</Text>
      ) : (
        <View style={styles.componentContainer}>
          <View style={styles.searchContainer}>
            <SearchInput stateData={stateData} />
          </View>
          <View style={styles.weatherContainer}>
            <Weather stateData={stateData} />
            {forecastData.length > 0 && (
              <View style={styles.forecastContainer}>
                <Text style={styles.forecastTitle}>7-Day Forecast:</Text>
                <View style={styles.forecastList}>
                  {forecastData.map((forecast, index) => (
                    <View style={styles.weatherContainer} key={index}>
                      <Text style={styles.forecastItem}>
                        {forecast.dt_txt}: {forecast.main.temp}°C
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 30,
  },
  componentContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  searchContainer: {
    marginTop: 30,
  },
  weatherContainer: {
    marginTop: 50,
  },
  forecastContainer: {
    marginTop: 20,
  },
  forecastTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  forecastList: {
    flexDirection: "column",
  },
  forecastItem: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
});
