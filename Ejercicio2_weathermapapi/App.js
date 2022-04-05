
import React, {useCallback, useState} from 'react';
import {StyleSheet,Text,View,TextInput,ImageBackground, ActivityIndicator, Button} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';



const App = () => {
  const [input, setInput] = useState('');
  const [pickerValue,setPickerValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = {
    key: 'c7cb061f2a79e0b1d23e51d61621c783',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    setPickerValue('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${pickerValue}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.dir(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pickerValue, api.key]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('./assets/bg3.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View>
         <Picker 
      selectedValue={setPickerValue}
      onValueChange={ciudad => setPickerValue(ciudad)}
      style={styles.itempais}>
        <Picker.Item label="--Selecciones ciudad de San Salvador--" value="" style={{color:"white"}}/>
        <Picker.Item label="Aguilares" value="Aguilares,sv"  />
        <Picker.Item label="Apopa" value="Apopa,sv"/>
        <Picker.Item label="Ciudad delgado" value="Ciudad delgado,sv"/>
        <Picker.Item label="Ayutuxtepeque" value="Ayutuxtepeque,sv"/>
        <Picker.Item label="Cuscatancingo" value="Cuscatancingo,sv"/>
        <Picker.Item label="El Paisnal " value="El Paisnal,sv"/>
        <Picker.Item label="Guazapa" value="Guazapa,sv"/>
        <Picker.Item label="Ilopango" value="Ilopango,sv"/>
        <Picker.Item label="Mejicanos" value="Mejicanos,sv"/>
        <Picker.Item label="Nejapa" value="Nejapa,sv"/>
        <Picker.Item label="Panchimalco" value="Panchimalco,sv"/>
        <Picker.Item label="Rosario de Mora" value="Rosario de Mora,sv"/>
        <Picker.Item label="San Martin" value="San Martin,sv"/>
        <Picker.Item label="San Salvador" value="San Salvador,sv"/>
        <Picker.Item label="Santiago Texacuangos" value="Santiago Texacuangos,sv"/>
        <Picker.Item label="Santo Tomas" value="Santo Tomas,sv"/>
        <Picker.Item label="Soyapango" value="Soyapango,sv"/>
        <Picker.Item label="Tonacatepeque" value="Tonacatepeque,sv"/>
      </Picker>
      <Button
  onPress={fetchDataHandler}
  title="Buscar"
  color="#841584"
  accessibilityLabel="Buscar"
/>
  </View>
        {loading && (
          <View>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </View>
        )}
        {data && (
          <View style={styles.infoView}>
            <Text
              style={
                styles.cityCountryText
              }>{`${data?.name}, ${data?.sys?.country}`}</Text>
            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
            <Text style={styles.tempText}>{`${Math.round(
              data?.main?.temp,
            )} °C`}</Text>
            <Text style={styles.minMaxText}>{`Min ${Math.round(
              data?.main?.temp_min,
            )} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },

  cityCountryText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  infoView: {
    alignItems: 'center',
  },

  dateText: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 45,
    color: '#fff',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 22,
    color: '#fff',
    marginVertical: 10,
    fontWeight: '500',
  },
  itempais:{
    height:60,
    backgroundColor:'#fff',
    marginTop:100
  }
});

export default App;


