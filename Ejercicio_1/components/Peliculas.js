import React,{useState} from 'react';
import {View, StyleSheet,Image,ScrollView,Text,TouchableOpacity,Modal,Button,TouchableHighlight} from 'react-native';
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview'


const App = () =>{
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [modalVisiblecomedia1,setModalVisiblecomedia1] = useState(false);
  const [modalVisiblecomedia2,setModalVisiblecomedia2] = useState(false);
  const [modalVisiblecomedia3,setModalVisiblecomedia3] = useState(false);
  const [modalVisiblecomedia4,setModalVisiblecomedia4] = useState(false);
  const [modalVisiblecomedia5,setModalVisiblecomedia5] = useState(false);
  const [modalVisiblecomedia6,setModalVisiblecomedia6] = useState(false);

  const [modalVisibleromance1,setModalVisibleromance1]= useState(false);
  const [modalVisibleromance2,setModalVisibleromance2]= useState(false);
  const [modalVisibleromance3,setModalVisibleromance3]= useState(false);
  const [modalVisibleromance4,setModalVisibleromance4]= useState(false);
  const [modalVisibleromance5,setModalVisibleromance5]= useState(false);
  const [modalVisibleromance6,setModalVisibleromance6]= useState(false);

  const [modalVisibleaccion1,setModalVisibleaccion1]=useState(false);
  const [modalVisibleaccion2,setModalVisibleaccion2]=useState(false);
  const [modalVisibleaccion3,setModalVisibleaccion3]=useState(false);
  const [modalVisibleaccion4,setModalVisibleaccion4]=useState(false);
  const [modalVisibleaccion5,setModalVisibleaccion5]=useState(false);
  const [modalVisibleaccion6,setModalVisibleaccion6]=useState(false);
  
  
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
        source={{ uri: "https://youtu.be/IRKd2o7TzU0" }}
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
        source={{ uri: "https://www.youtube.com/watch?v=79Ps-xJRf-0&t=4s" }}
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
        source={{ uri: "https://www.youtube.com/watch?v=oDcq4GBOaTg" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia3(!modalVisiblecomedia3)}}></Button>
  </View>
 </View>
 </Modal>


 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia4} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=SSUjmrFt69g" }}
      />
    </View>
    
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia4(!modalVisiblecomedia4)}}></Button>
  </View>
 </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia5} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=34WIbmXkewU" }}
      />
    </View>
    
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia5(!modalVisiblecomedia5)}}></Button>
  </View>
 </View>
 </Modal>

 <Modal transparent={true} animationType="slide" visible={modalVisiblecomedia6} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=FfySrprx_ao" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisiblecomedia6(!modalVisiblecomedia6)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleromance1} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=PQ0RIeH__hI" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance1(!modalVisibleromance1)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleromance2} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=Ur9xLzOJNIs" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance2(!modalVisibleromance2)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleromance3} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=ZnpMsaha880" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance3(!modalVisibleromance3)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleromance4} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=QoC8q9Oc2w8" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance4(!modalVisibleromance4)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleromance5} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=8rYl_q0oU4U" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance5(!modalVisibleromance5)}}></Button>
  </View>
 </View>
 </Modal>

   <Modal transparent={true} animationType="slide" visible={modalVisibleromance6} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=YX52PKt-jtA" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleromance6(!modalVisibleromance6)}}></Button>
  </View>
 </View>
 </Modal>

    <Modal transparent={true} animationType="slide" visible={modalVisibleaccion1} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=KnWAzdvhLn4" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion1(!modalVisibleaccion1)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleaccion2} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=w75pIkF6EQo" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion2(!modalVisibleaccion2)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleaccion3} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=5QqkTUFdnE8" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion3(!modalVisibleaccion3)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleaccion4} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=SJoX4n_VPpI" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion4(!modalVisibleaccion4)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleaccion5} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=kRca2K059Zo" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion5(!modalVisibleaccion5)}}></Button>
  </View>
 </View>
 </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibleaccion6} onRequestClose={()=>{
   alert('Modal has been closed')
 }}>
 <View style={styles.vistaModal}>
  <View style={styles.Modal}>
     <View style={styles.container2}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={false}
        source={{ uri: "https://www.youtube.com/watch?v=Amzj7xll3Aw" }}
      />
    </View>
    <Button title="Cerrar" onPress={()=>{setModalVisibleaccion6(!modalVisibleaccion6)}}></Button>
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
  <ScrollView horizontal>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia1(!modalVisiblecomedia1)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://1.bp.blogspot.com/-oZqtpEj62vw/X9cpCv7lAzI/AAAAAAAA7UE/fblZkA9IwF0yWvkqQnhmCRLIhOJcYa0-ACLcBGAsYHQ/s888/la-otra-missy-poster-netflix.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia2(!modalVisiblecomedia2)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/d/d1/LosMiller.jpg/revision/latest?cb=20130823231720&path-prefix=es'} }/>
    </TouchableHighlight>
   
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia3(!modalVisiblecomedia3)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F050%2F061%2Fnoche-de-juegos-1.jpg&   nuevoancho=690&medio=abc'} }/>
    </TouchableHighlight>
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia4(!modalVisiblecomedia4)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51-ELDuCZIL._SX349_BO1,204,203,200_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
     <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia5(!modalVisiblecomedia5)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://i.pinimg.com/474x/77/9a/26/779a2649670bd9e5c99ced14d7a63925--the-intouchables-film.jpg'} }/>
    </TouchableHighlight>
    </View>

    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisiblecomedia6(!modalVisiblecomedia6)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/3/31/Como_Ser_Soltera_Poster_Latino_JPosters.jpg/revision/latest?cb=20160126023135&path-prefix=es'} }/>
    </TouchableHighlight>
    </View>
  </ScrollView>
 </View>

  <View style={styles.contenedor}>
  <Text style={styles.titulo}>Romance</Text>
  <ScrollView horizontal>
    <View>
      <TouchableHighlight
    onPress={()=>{setModalVisibleromance1(!modalVisibleromance1)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://i.pinimg.com/originals/b4/4b/4f/b44b4fa2ea8448ed7769a9510a174075.jpg'} }/>
    </TouchableHighlight>
    </View>

    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleromance2(!modalVisibleromance2)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71y41l8swYL._AC_SX342_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleromance3(!modalVisibleromance3)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71yOlq2yb1L._SL1211_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleromance4(!modalVisibleromance4)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/816aahAJIuL._SL1500_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleromance5(!modalVisibleromance5)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51Cyc+3qSTL._SX327_BO1,204,203,200_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisibleromance6(!modalVisibleromance6)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61Ug3t+ocUL.jpg'} }/>
    </TouchableHighlight>
    </View>
  </ScrollView>
 </View>

 
  <View style={styles.contenedor}>
  <Text style={styles.titulo}>Acción</Text>
  <ScrollView horizontal>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleaccion1(!modalVisibleaccion1)}}>
    <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/51m2ihShWkL._SY445_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisibleaccion2(!modalVisibleaccion2)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/61GnAONreLL._SL1024_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleaccion3(!modalVisibleaccion3)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71ZyEZrIgiL._AC_SY450_.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleaccion4(!modalVisibleaccion4)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/7/71/Mision_Imposible_-_Repercusi%C3%B3n.jpg/revision/latest?cb=20180606233113&path-prefix=es'} }/>
    </TouchableHighlight>
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisibleaccion5(!modalVisibleaccion5)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://es.web.img3.acsta.net/pictures/21/05/25/13/44/0609737.jpg'} }/>
    </TouchableHighlight>
    </View>
    <View>
   <TouchableHighlight
    onPress={()=>{setModalVisibleaccion6(!modalVisibleaccion6)}}>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/81AXRX0MnPL._SL1500_.jpg'} }/>
    </TouchableHighlight>
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
 container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;
