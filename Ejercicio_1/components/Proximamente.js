import * as React from 'react';
import { Text, View, StyleSheet,ScrollView, Image, Button } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
   const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
    <View style={styles.container2}>
<ScrollView >
       <Image
 style={styles.banner}
 source={{uri:'https://www.atpiluminacion.com/files/actualidad/2109_catalogo/atp-iluminacion-proximamente.jpg'} }/>
    <View >
      <View style={styles.container2}>
         <Video
        ref={video}
        style={styles.video}
        source={require("../assets/trailer_animales_fantasticos.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Text style = {styles.title}>Fantastic Beasts and Where to Find Them 3</Text>
      <Text style = {styles.text}>Ante una severa amenaza, el magizoólogo Newt Scamander lidera a un valiente grupo de magos y brujas que busca detener al  malvado Gellert Grindelwald.</Text>
      <Text style = {styles.title}>14 de abril de 2022</Text>
    </View>
    </View>

     <View >
      <View style={styles.container2}>
         <Video
        ref={video}
        style={styles.video}
        source={require("../assets/trailer_doctor_strange.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Text style = {styles.title}>Doctor Strange: Multiverse of Madness</Text>
      <Text style = {styles.text}>El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme.</Text>
      <Text style = {styles.title}>28 de abril de 2022</Text>
    </View>
    </View>

      <View >
      <View style={styles.container2}>
         <Video
        ref={video}
        style={styles.video}
        source={require("../assets/trailer_peaky_blinders.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Text style = {styles.title}>Peaky Blinders</Text>
      <Text style = {styles.text}>Gran Bretaña vive la posguerra. Los soldados regresan, se acuñan nuevas revoluciones y nacen bandas criminales en una nación agitada.</Text>
      <Text style = {styles.title}>12 de mayo de 2022</Text>
    </View>
    </View>
    </ScrollView>
    </View>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  banner:{
 height:250,
 flex:1
},
 container2: {
    flex: 1,
    justifyContent: 'center',
     backgroundColor: '#121212',
     marginTop:15
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
  text: {
      fontSize:20,
     color: 'rgba(255, 255, 255, 0.5)',
      textAlign:"center",
      fontFamily:"Times new roman",
      marginStart:20

   },
  title:{
    fontSize:24,
    color:"white",
    textAlign:"center"
  }
  
});
