import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions, Image,TouchableOpacity,ScrollView ,ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-remix-icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Profile = () => {
    return (
        <View style={{flex : 1,  width : windowWidth, flexDirection : 'column' , gap : 20}}>
          <ImageBackground source={require('./assets/22.webp')} resizeMode="cover" style={{flex : 1, width : '100%'}}>
            <View style={{backgroundColor : '#00000044' , height : '100%'}}>
                <LinearGradient   start={{x: 0.0, y: 0}} end={{x: 1, y: 1}}
                locations={[0,0.5,0.6]} colors={['#ffffff01', '#ffffff','#ffffff']}  style={{overflow : 'hidden' , borderRadius : 12}}>
                <View style={{ padding : 20,height : '18%'}}>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between' , }}>
                        <View style={{backgroundColor : '#ffffff77' , borderRadius : 16, padding : 5, }}>
                            <Icon name="ri-arrow-left-line" color="#fff" size={30} />
                        </View>
                        <View>
                            <Text style={styles.text}>Steve Johnson</Text>
                        </View>
                        <View>
                            <Icon name="ri-menu-line" color="#fff" size={30} />
                        </View>
                    </View>
                </View>
                <View style={{padding : 22 }}>
                    <View style={{flexDirection : 'column' , alignItems : 'center' , marginBottom : 20}}>
                        <Image  style={[styles.coreImage , ]} source={require('./assets/img1.jpg')} />
                        <Text style={styles.text2}>Steve John</Text>
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'space-between' , paddingHorizontal : 40 }}>
                        <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                            <Text style={{fontWeight : '600', color : '#000' , fontSize : 20}}>45</Text>
                            <Text style={{fontWeight : '400', color : '#d0d0d0' , fontSize : 16}}>Following</Text>
                        </View>
                        <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                            <Text style={{fontWeight : '600', color : '#000' , fontSize : 20}}> 125.5</Text>
                            <Text style={{fontWeight : '400', color : '#d0d0d0' , fontSize : 16}}>Followers</Text>
                        </View>
                        <View style={{flexDirection : 'column' , alignItems : 'center'}}>
                            <Text style={{fontWeight : '600', color : '#000' , fontSize : 20}}>1.5k</Text>
                            <Text style={{fontWeight : '400', color : '#d0d0d0' , fontSize : 16}}>Posts</Text>
                        </View>
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent : 'center', alignItems : 'center', marginVertical : 14}}>
                        <View style={{width : '60%'}}>
                            <LinearGradient colors={['#f9af21','#f8413a']}  style={{overflow : 'hidden' , borderRadius : 12}}>
                                <Text style={[styles.text, styles.loginBtn, styles.signUp]}>Sign Up</Text>
                            </LinearGradient>
                        </View>
                        <View style={{backgroundColor : '#00000055' , height : '100%' , flexDirection : 'row' , alignItems : 'center', paddingHorizontal : 12, borderRadius  : 10}}>
                            <Icon name="ri-message-3-line" color="#d9d9d9" size="20" />
                        </View>
                    </View>
                    <View style={{paddingHorizontal : 30 , marginVertical : 10}}>
                        <View style={{backgroundColor : 'lightgrey' , padding : 4 , borderRadius : 15, flexDirection : 'row'}}>
                            <View style={{backgroundColor : '#fff' ,borderRadius : 15 , width : '33.33%'}}>
                                <Text style={{fontWeight : '600', color : '#000' , fontSize : 20 , paddingVertical : 12 , textAlign : 'center'}}>
                                    Photos
                                </Text>
                            </View>
                            <View style={{ width : '33.33%'}}>
                                <Text style={{fontWeight : '600', color : '#000' , fontSize : 20 , paddingVertical : 12 , textAlign : 'center'}}>
                                    Video
                                </Text>
                            </View>
                            <View style={{ width : '33.33%'}}>
                                <Text style={{fontWeight : '600', color : '#000' , fontSize : 20 , paddingVertical : 12 , textAlign : 'center'}}>
                                    Tagged
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection : 'row' , flexWrap : 'wrap' , justifyContent : 'center'}}>
                            <Image  style={[styles.coreImageNew ,{height : 80} ]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew ,{height : 120} ]} source={require('./assets/p2.png')} />
                            <Image  style={[styles.coreImageNew , {height : 80}]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew ,{height : 120}  ]} source={require('./assets/p1.png')} />
                            <Image  style={[styles.coreImageNew , {height : 80} ]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew , {height : 120} ]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew ,{height : 80}  ]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew ,{height : 120}  ]} source={require('./assets/img1.jpg')} />
                            <Image  style={[styles.coreImageNew , {height : 80}  ]} source={require('./assets/img1.jpg')} />
                    </View>
                </View>
                </LinearGradient>
            </View>
          </ImageBackground>
          
         

        </View>
    )
}

const styles = StyleSheet.create({
    header : {
      flexDirection : 'row', alignItems : 'center' , justifyContent : 'space-between', paddingHorizontal : 20 ,
    },text : {
      color : '#fff',fontSize : 32, fontWeight : '900',
    },
    text2 : {
        color : '#000',fontSize : 32, fontWeight : '900',
      },
  coreImage1 : {height : 75 , width : 75, overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff',},
  coreImage : {height : 80 , width : 80, overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff', marginRight : 15},
  coreImageNew : {height : 100 , width : '27.33%', overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff', marginRight : 15}
    ,border1 : {
      borderWidth : 1, borderColor : "#d9d9d9" , padding : 3, marginRight : 5, borderRadius : 20 , position : 'relative'
    },
  coreImage2 : {height : '100%' , width : "100%", overflow : 'hidden' , borderRadius : 20 ,borderWidth : 3 , borderColor : '#fff',},
  signUp : {
    color : '#fff'
  },
  loginBtn :{
    borderColor : '#f0f1f5', borderWidth : 0.9, width : '100%', flexDirection : 'row' , margin : 'auto',textAlign : 'center', paddingHorizontal : 20 , paddingVertical : 16, fontWeight : '600', fontSize : 17, overflow : 'hidden'
}
});

export default Profile;