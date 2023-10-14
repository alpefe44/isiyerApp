import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { hakkimizda } from '../data';
import { useFonts } from 'expo-font';
import { Video, ResizeMode } from 'expo-av';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const [fontsLoaded] = useFonts({
    'Gabarito': require('../assets/fonts/gabarito.ttf'),
  });
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}>
      <View style={{ elevation: 40, shadowColor: 'green', marginVertical: 40, }}>
        <View style={{ borderWidth: 15, borderRadius: 10, borderTopColor: 'green', borderBottomColor: 'white', borderRightColor: 'white', borderLeftColor: 'green', padding: 10, flexDirection: 'row', width: '80%', marginHorizontal: 20, alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center' }}>
          <View style={{ width: 50, height: 50 }}>
            <Image style={{ flex: 1, resizeMode: 'center' }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/01/seffaf-arka-plan.png?w=240" }}></Image>
          </View>
          <Text style={{ fontFamily: "Gabarito", fontSize: 22 }}>ISIYER MEKANİK</Text>
        </View>
      </View>

      <View style={{ height: height * 0.3, width: width * 0.98, backgroundColor: 'white', alignSelf: 'center', marginTop: 5, borderRadius: 5, elevation: 20 }}>
        <View style={{ flex: 1, padding: 4 }}>
          <Video
            ref={video}
            style={{ flex: 1, borderRadius: 15 }}
            source={require('../assets/video.mp4')}
            isMuted={true}
            shouldPlay
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          {/* <Image style={{ flex: 1 }} source={{ uri: "https://static.addtoany.com/images/dracaena-cinnabari.jpg" }}></Image> */}
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ fontSize: 24, fontFamily: "Gabarito" }}>Hizmetlerimiz</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ marginVertical: 15, width: '100%' }}>

        <View style={{ height: 'auto', flexDirection: 'row' }}>
          {
            hakkimizda.map((item) => {
              return (
                <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                  <View style={{ width: 150, height: 150, elevation: 15, shadowColor: 'white' }}>
                    <Image style={{ flex: 1, borderRadius: 15, resizeMode: 'contain' }} source={{ uri: item.imageUrl }}></Image>
                  </View>
                  <Text style={{ fontSize: 16, fontFamily: "Gabarito", textAlign: 'center', elevation: 15, textShadowRadius: 5 }}>{item.title}</Text>
                </View>
              )
            })
          }
        </View>

      </ScrollView>
      <View>
        <Text style={{ marginHorizontal: 20, fontFamily: 'Gabarito', fontSize: 24, borderTopWidth: .6, borderTopColor: 'green' }}>Çalışma Sistemimiz</Text>
        <View style={{ flexDirection: 'row', marginHorizontal: 10, alignSelf: 'center', width: '100%', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: 80, height: 100 }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/06/1-3.png" }}></Image>
            <Text style={{ fontFamily: "Gabarito" }}>Keşif</Text>
          </View>
          <View style={{ alignItems: 'center', paddingLeft: 10 }}>
            <Image style={{ width: 80, height: 100 }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/06/2-3.png" }}></Image>
            <Text style={{ fontFamily: "Gabarito" }}>Projelendirme</Text>
          </View>
          <View style={{ alignItems: 'center', paddingLeft: 10 }}>
            <Image style={{ width: 80, height: 100 }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/06/3-2.png" }}></Image>
            <Text style={{ fontFamily: "Gabarito" }}>Uygulama</Text>
          </View>
          <View style={{ alignItems: 'center', paddingLeft: 10 }}>
            <Image style={{ width: 80, height: 100 }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/06/4-2.png" }}></Image>
            <Text style={{ fontFamily: "Gabarito" }}>Teslim</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen