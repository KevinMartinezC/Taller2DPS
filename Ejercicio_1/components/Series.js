import React,{useState} from 'react';
import {View, StyleSheet,Image,ScrollView,Text,TouchableOpacity,Modal,Button,TouchableHighlight, SafeAreaView} from 'react-native';
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview'


const Series = () =>{
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [modalVisiblecomedia1,setModalVisiblecomedia1] = useState(false);
  const [modalVisiblecomedia2,setModalVisiblecomedia2] = useState(false);
  const [modalVisiblecomedia3,setModalVisiblecomedia3] = useState(false);


  const [modalVisibleAventura1,setModalVisibleAventura1]= useState(false);
  const [modalVisibleAventura2,setModalVisibleAventura2]= useState(false);
  const [modalVisibleAventura3,setModalVisibleAventura3]= useState(false);


  const [modalVisibleFantasia1,setModalVisibleFantasia1]=useState(false);
  const [modalVisibleFantasia2,setModalVisibleFantasia2]=useState(false);
  const [modalVisibleFantasia3,setModalVisibleFantasia3]=useState(false);
  
  
 return(
 <>
 <ScrollView>

 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia1} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=i1eJMig5Ik4" }}
      />
    </View>
    
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia1(!modalVisiblecomedia1)}}></Button>
  </View>
 </View>
 </Modal>

 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia2} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=Ab2YIbP5xw8" }}
      />
    </View>
    
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia2(!modalVisiblecomedia2)}}></Button>
  </View>
 </View>
 </Modal>


 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia3} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=0Kvw2BPKjz0" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia3(!modalVisiblecomedia3)}}></Button>
  </View>
 </View>
 </Modal>


  <Modal transparent={true} animationType="slide" visible={modalVisibleAventura1} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=KcBStos46EM" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleAventura1(!modalVisibleAventura1)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleAventura2} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=5VYb3B1ETlk" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleAventura2(!modalVisibleAventura2)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleAventura3} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=_JX89CWH5MU" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleAventura3(!modalVisibleAventura3)}}></Button>
  </View>
 </View>
 </Modal>


    <Modal transparent={true} animationType="slide" visible={modalVisibleFantasia1} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=EPgMTdmsVoE" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleFantasia1(!modalVisibleFantasia1)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleFantasia2} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=_mS7xX3v_Sc" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleFantasia2(!modalVisibleFantasia2)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleFantasia3} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=cRLphGE1NDc" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleFantasia3(!modalVisibleFantasia3)}}></Button>
  </View>
 </View>
 </Modal>


<View >
 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={{uri:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/12/producciones-netflix-2175501.jpg?itok=uFhAi4Ez'} }/>
 </View>

  

<View style={styles.contenedor}>
  <Text style={styles.titulo}>Comedia</Text>

  <ScrollView>
    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia1(!modalVisiblecomedia1)}} >
    <Image
    style={styles.peliculas}
    source={{uri:'https://es.web.img2.acsta.net/pictures/15/02/20/10/21/222923.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Bojack Horseman
      </Text>
    <Text style = {styles.text}> 6 Temporadas</Text>
    </View>
    </View>

<View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia2(!modalVisiblecomedia2)}} >
    <Image
    style={styles.peliculas}
    source={{uri:'https://es.web.img2.acsta.net/pictures/14/03/28/10/18/433386.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Suits
      </Text>
    <Text style = {styles.text}> 9 Temporadas</Text>
    </View>
    </View>


    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia3(!modalVisiblecomedia3)}} >
    <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/81NK3yCvMJL._SL1500_.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     The Office
      </Text>
    <Text style = {styles.text}> 9 Temporadas</Text>
    </View>
    </View>


<Text style={styles.titulo}>Aventura</Text>

    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleAventura1(!modalVisibleAventura1)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4QU5SYV7CREFBGFOT5ZTYNBDEM.jpeg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Loki
      </Text>
    <Text style = {styles.text}> 1 Temporada</Text>
    </View>
    </View>

    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleAventura2(!modalVisibleAventura2)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://pbs.twimg.com/media/FE7d45hXsAQ6oUJ.jpg:large'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Hawkeye
      </Text>
    <Text style = {styles.text}> 1 Temporada</Text>
    </View>
    </View>

<View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleAventura3(!modalVisibleAventura3)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/titanes-poster-temporada-2.jpg?itok=PJZ02S2i'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Titans
      </Text>
    <Text style = {styles.text}> 5 Temporadas</Text>
    </View>
    </View>


    <Text style={styles.titulo}>Fantasia</Text>

    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleFantasia1(!modalVisibleFantasia1)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Stranger Things
      </Text>
    <Text style = {styles.text}> 4 Temporadas</Text>
    </View>
    </View>

    <View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleFantasia2(!modalVisibleFantasia2)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://i.pinimg.com/736x/31/36/48/313648156e27963f8469f27e2c25fecb.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     Colony
      </Text>
    <Text style = {styles.text}> 3 Temporadas</Text>
    </View>
    </View>

<View style={styles.container}>
      <TouchableHighlight
    onPress={()=>{setModalVisibleFantasia3(!modalVisibleFantasia3)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg'} }/>
    </TouchableHighlight>
    <View>
    <Text style = {styles.text}>
     The flash
      </Text>
    <Text style = {styles.text}> 8 Temporadas</Text>
    </View>
    </View>
    
  </ScrollView>
 </View>

 </View>
  </ScrollView>
</>
 );
};


const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
contenedor:{
  
   backgroundColor: '#121212',

},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  color: '#f4f4f4',
  marginVertical:10,
  marginStart:10
},
peliculas:{
  width:150,
  height:200,
  marginStart:10,
  marginRight:10
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},

  video: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
   container: {
      padding: 10,
      marginTop: 5,
      backgroundColor: '#121212',
      alignItems: 'center',
      flex:1,
      flexDirection:"row"
   },
   text: {
     fontSize:20,
      color: 'rgba(255, 255, 255, 0.5)',
      paddingLeft: 3,
      textAlign:"center",
      fontFamily:"Times new roman"
   },
   containe:{
     padding: 5,
      marginTop: 3,
      backgroundColor: '#FFFFF',
      alignItems: 'center',
      flex:1,
      flexDirection:"col"
   },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});


export default Series;