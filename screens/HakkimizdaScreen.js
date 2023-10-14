import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const HakkimizdaScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingVertical: 25 }}>
      <ScrollView style={{ backgroundColor: 'white' }} >
        <View>
          <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 50, marginRight: 10 }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/01/seffaf-arka-plan.png?w=240" }}></Image>
            <Text style={{ fontFamily: 'Gabarito', fontSize: 32 }}>Hakkımızda</Text>
          </View>
          <View style={{ width: width - 5, height: height * .2, alignSelf: 'center', borderBottomWidth: 5, borderBottomColor: '#9de498', elevation: 15, marginBottom: 15 }}>
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/06/adsiz-tasarim.png" }}></Image>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontFamily: 'Gabarito', textShadowRadius: 10, elevation: 5 }}>Firmamız 1986 yılında inşaat sektörüne yerden ısıtma tesisatını Türkiye’ye getirerek başlamıştır. Daha sonra mekanik tesisat bölümünün kaliteli malzeme ve kalifiyeli elemandan yoksun olduğunu fark ederek tesisat bölümüne adım atmıştır. Kuruluşundan bugüne kadar hızlı ve güvenilir hizmeti esas alarak çalışmalarına devam etmiştir.
              Bu güne kadar yapılan imalatlarda problemsiz tesisat ihtiyaçlarını karşılamak üzere özenle çalışılmıştır. Sektöre tesisatta; fonksiyonel proje, doğru ürün, kaliteli işçilik hizmeti kazandırmayı kendine ana misyon edinmiştir.
              Firmamızın kurulduğu günden bu yana sektörün öncü firmalarından olmayı başarmıştır. Yaptığımız imalatlarda verdiğimiz doğru hizmetin oluşturduğu güven sayesinde Türkiye’nin dört bir yanında ekiplerimizle doğru hizmete devam ediyoruz.
              Kuruluşumuzdan bu güne kadar sayısız projeye imzaya attık. Projelerimizi görmek için buraya tıklayınız.</Text>
          </View>
          <View style={{ paddingHorizontal: 3, marginVertical: 20, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center' }}>
            <View style={{ width: '40%', borderLeftWidth: 1, paddingLeft: 3, borderColor: '#fd2a2c' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Vizyonumuz</Text>
              <Text style={{ fontFamily: 'Gabarito' }}>Doğru hizmeti ve güvenirliği koruyarak sektörde müşterilerin tercih ettiği ilk şirket olmak.</Text>
            </View>
            <View style={{ width: '40%', borderRightWidth: 1, paddingRight: 3, borderColor: 'green' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Misyonumuz</Text>
              <Text style={{ fontFamily: 'Gabarito' }}>Etkin ekip çalışması, açık iletişim ve sürekli çözüm üreterek beklentilerin üzerinde müşteri memnuniyeti sağlamak.</Text>
            </View>
          </View>

          <View style={{ alignSelf: 'center', width: width * .9, height: height * .3 }}>
            <Image style={{ flex: 1, resizeMode: 'contain' }} source={{ uri: "https://isiyermekanik.files.wordpress.com/2022/01/isiyer-mekanik.png" }}></Image>
            <View style={{ alignItems: 'center' , justifyContent:'center' }}>
              <Text style={{ fontFamily: 'Gabarito' }}>Daha fazla bilgi için bizi arayın.</Text>
              <Text style={{ fontFamily: 'Gabarito', color: 'gray' }}>+90 850 318 08 34</Text>
              <Text style={{ fontFamily: 'Gabarito', color: 'gray' }}>isiyer@isiyer.com.tr</Text>
            </View>
          </View>

        </View>
      </ScrollView >
    </View>
  )
}

export default HakkimizdaScreen