import React from 'react';
import { View, Text,  StyleSheet,Image } from 'react-native';
import Button from './Button';


const WeatherInfo = ({ fetchWeatherData, weatherData,icon }) => {
    const { main, weather, name, sys, visibility, wind } = weatherData || {};
    const imageUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  
  const handleRefresh = () => {
    if (name) {
      fetchWeatherData(name);
    }
  }
  
  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No weather data available</Text>
        <Button title="Refresh" onPress={handleRefresh} />
      </View>
    );
  }

  const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
<View>
<View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
        
      </View>
      <View style={styles.logo}>
      <Image source={{ uri: imageUrl }} style={styles.apiImage} />
        {/* <Image source={{ uri: `http:openweathermap.org/img/wn/${icon}.png` }} /> */}
        <Text style={styles.currentTemp}>{Math.round(main.temp-273)}°C</Text>
        <Image style={styles.largeIcon} source={require("./assets/temp.png")} />
      </View>
      <Text style={styles.description}>{weather[0].description.toLowerCase()}</Text>
          
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/temp.png")}
            />
            <Text style={styles.infoText}>Feel Like </Text>
            <Text style={styles.infoText}>{Math.round(main.feels_like-273)}°C</Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/humidity.png")}
            />
            <Text style={styles.infoText}>Humidity </Text>
            <Text style={styles.infoText}>{main.humidity}%</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/visibility.png")}
            />
            <Text style={styles.infoText}>Visibility</Text>
            <Text style={styles.infoText}> {visibility / 1000} km</Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/windspeed.png")}
            />
            <Text style={styles.infoText}>Wind Speed</Text>
            <Text style={styles.infoText}>{wind.speed} m/s</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/sunrise.png")}
            />
            <Text style={styles.infoText}>Sunrise</Text>
            <Text style={styles.infoText}> {sunriseTime}</Text>
          </View>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require("./assets/sunset.png")}
            />
            <Text style={styles.infoText}>Sunset</Text>
            <Text style={styles.infoText}>{sunsetTime}</Text>
          </View>
        </View>
    </View>
</View>
       
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColo:"#000",
    marginTop: 25,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    backgroundColor: '#fff',
    color: "#000",
    marginTop: 10,
    elevation:20,
    margin:10
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  apiImage: {
    width: 50,
    height: 50,
  },
  largeIcon: {
    width: 80,
    height: 80,
  },
  currentTemp: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 5,
  },
  extraInfo: {
    flexDirection: "row",
    padding: 10,
    margin:1,
  },
  info: {
    width: 120,
    backgroundColor:"#13547a",
    padding: 4,
    alignItems: "center",
    elevation:20,
  },
  smallIcon: {
    height: 35,
    width: 35,
    borderRadius: 3,
    alignItems: "center",
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
    color: "#f4f4f4",
  },
});

export default WeatherInfo;








