import { StyleSheet, Text, View, Alert, TextInput,  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import WeatherInfo from './WeatherInfo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './Button';

const API_KEY = 'bdad9ca5fdffb89d6eb86bfed5255802';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [searchCity, setSearchCity] = useState('');

  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
        Alert.alert('Error', 'City not found');
      }
    } catch (error) {
      setWeatherData(null);
      Alert.alert('Error', error.message);
    } finally {
      setLoaded(true);
    }
  };

  const handleSearch = () => {
    if (searchCity.trim() !== '') {
      fetchWeatherData(searchCity);
      setSearchCity('');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather Online</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter City Name ..."
          value={searchCity}
          onChangeText={setSearchCity}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <WeatherInfo fetchWeatherData={fetchWeatherData} weatherData={weatherData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin:10,
  },
  header: {
    backgroundColor: 'rgba(133,204,133,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius:30,
    margin:15,
    padding:5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color:"white",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1.3,
    borderColor: 'green',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },

});

export default Weather;
