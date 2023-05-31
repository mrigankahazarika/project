import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions, Image,TouchableOpacity,ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-remix-icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = () => {
  const navigation = useNavigation();

    return (
        <View style={{flex : 1 , paddingTop : 45 ,  width : windowWidth, flexDirection : 'column' , gap : 20}}>
          {/* header */}
          <View style={styles.header}>
            <View>
              <Text style={[styles.text , styles.font1]}>Piqobe</Text>
            </View>
            <View style={{flexDirection : 'row' , gap : 14}}>
                  <Icon name="ri-settings-4-line" size="25" />
                  <View style={{position : 'relative'}}>
                      <View style={{height : 10, width : 10 , borderRadius : 100, backgroundColor : 'red' , position : 'absolute', right : 0, elevation : 99, zIndex : 99}}></View>
                    <Icon name="ri-notification-4-line" size="25" />
                  </View>
            </View>
          </View>
          {/* header */}
          {/* stories */}
            <View style={{paddingLeft : 20}}>
                <ScrollView  horizontal={true} >
                {/* <View> */}
                <View>
                  <View style={styles.border1}>
                    <Image style={styles.coreImage1} source={require('./assets/p1.png')} />
                      <View style={{position : 'absolute', flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center', height : '100%', width : '100%' }}> 
                          <View style={{backgroundColor : '#fff', borderRadius : 5}}>
                            <Icon name="ri-add-line" size="20" />
                          </View>
                    </View>
                  </View>
                    <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>You</Text>
                </View>
                <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                  <Image style={styles.coreImage} source={require('./assets/p2.png')} />
                  <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>Pieters</Text>
                </View>
                <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                  <Image style={styles.coreImage} source={require('./assets/p1.png')} />
                  <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>Lerone</Text>
                </View>
                <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                  <Image style={styles.coreImage} source={require('./assets/p2.png')} />
                  <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>Natilya</Text>
                </View>
                <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                  <Image style={styles.coreImage} source={require('./assets/p1.png')} />
                  <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>newborn</Text>
                </View>
                <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                  <Image style={styles.coreImage} source={require('./assets/p2.png')} />
                  <Text style={[styles.text , {textAlign : 'center' , fontWeight : '500' , fontSize : 18, marginTop : 6}]}>You</Text>
                </View>
                {/* </View> */}
                </ScrollView>
            </View>
          {/* stories */}
          {/* body */}
          <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
            <View style={{paddingHorizontal : 20}}>
                <View style={{backgroundColor : '#a6a6a744' , height : 500 , width : '100%' , borderRadius : 40 , position : 'relative', padding : 16}}>
                    <View style={{backgroundColor : '#f9f9f9' , height : '100%' , width : '100%' ,borderRadius : 40, padding : 16, position : 'relative' }}>
                        <View style={{flexDirection : 'row' , gap : 12, alignItems : 'center' , justifyContent : 'space-between', height :'20%'}}>
                          <View style={{flexDirection : 'row' , alignItems : 'center' , gap : 12}}>
                            <View style={{borderColor : '#f9af21' , borderWidth : 2, borderRadius : 20, position : 'relative' }}>
                            <Image  style={[styles.coreImage , ]} source={require('./assets/img1.jpg')} />
                            </View>
                            <View>
                                <Text style={[styles.text , {fontSize : 23, fontWeight : '600'}]}>
                                  Steve Johnson
                                </Text>
                                <Text style={[styles.text , {marginTop : 5, color : 'grey', fontSize : 16}]}>
                                  30 Sec Ago
                                </Text>
                            </View>
                          </View>
                          <View>
                              <Icon name="ri-message-3-line" size="23" />
                          </View>
                        </View>
                        {/* image */}
                        <View style={{height : '60%' , marginVertical : 12}}>
                            <Image resizeMode='contain' style={styles.coreImage2} source={require('./assets/p1.png')} />
                        </View>
                        <View style={{height : '20%'}}>
                          <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                              <View style={{flexDirection : 'row' , gap : 10}}>
                                  <Icon name="ri-heart-2-fill" size="28" color="red" />
                                  <Icon name="ri-chat-1-line" size="28" color="#0f0f0f" />
                                  <Icon name="ri-send-plane-line" size="28" color="#0f0f0f" />
                              </View>
                                  <Icon name="ri-handbag-line" size="28" color="#0f0f0f" />
                          </View>
                          <Text style={[styles.text , {marginTop : 12}]}>4,566,500 Liked By Mriganka</Text>
                        </View>
                        {/* image */}
                    </View>
                </View>
            </View>
          </TouchableOpacity>

          {/* body */}
          {/* footer */}
            {/* <View style={{borderTopColor : 'grey' , borderTopWidth : 1 , paddingHorizontal : 60}}>

            </View> */}
            <View style={{flexDirection : 'row' , justifyContent : 'space-between', paddingHorizontal : 24, marginTop : 'auto', alignItems : 'flex-end',}}>

                <View style={{borderBottomColor : '#f8413a' ,borderBottomWidth : 3 ,paddingVertical : 12 }}>
                    <Icon  name="ri-home-3-fill" size="30" color="#f8413a" />
                </View>
                <View style={{paddingVertical : 14 }} >
                    <Icon  name="ri-message-3-line" size="30" />
                </View>
                  <View style={{paddingVertical : 14 }}>
                    <View style={{backgroundColor : '#f8413a' ,padding : 10, borderRadius : 20}}>
                      <View style={{backgroundColor : '#fff', borderRadius : 50}}>
                        <Icon  name="ri-add-line" size="30" color="#f8413a" />
                      </View>
                  </View>
                </View>
                <View style={{paddingVertical : 14 }}>
                    <Icon  name="ri-search-2-line" size="30" />
                </View>
                <View style={{paddingVertical : 14 }}>
                    <Icon  name="ri-user-line" size="30" />
                </View>
            </View>
          {/* footer */}
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
      flexDirection : 'row', alignItems : 'center' , justifyContent : 'space-between', paddingHorizontal : 20 ,
    },text : {
      color : '#282935'
    },font1 : {
      fontSize : 50, fontWeight : '800',
    },
  coreImage1 : {height : 75 , width : 75, overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff',},
  coreImage : {height : 80 , width : 80, overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff', marginRight : 15}
    ,border1 : {
      borderWidth : 1, borderColor : "#d9d9d9" , padding : 3, marginRight : 5, borderRadius : 20 , position : 'relative'
    },
  coreImage2 : {height : '100%' , width : "100%", overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff',},
});

export default Home;