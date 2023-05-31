import React from 'react';
import {
  StyleSheet,
  Text,
  View,Dimensions, Image,TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-remix-icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const  Login = () =>  {
    const navigation = useNavigation();
  return (
   <View style={{padding : 20 , width : windowWidth , backgroundColor : '#f9f9f9' , flex : 1 , paddingVertical : 45}}>
      <View style={{ flexDirection : 'column' , justifyContent : 'space-between' , height : '100%'}}>
      {/* top text */}
        <View style={{flexDirection : 'column' ,gap : 12}}>
          <Text style={[styles.text , styles.font1 ]}>Best Social App To Make New Friends</Text>
          <Text style={[styles.text ,styles.font2]}>Find People With The Same Interests as You</Text>
        </View>
      {/* top text */}
      {/* Circle */}
      <View style={{margin : 'auto' , width : '100%' , flexDirection : 'row', alignItems : 'center' , justifyContent : 'center'}}>
            <View style={{height : windowHeight/2.5 , borderColor : '#f8413a' , borderRadius : 320 , width : windowWidth/1.2 , borderWidth : 3.5 ,borderStyle: 'dashed' , backgroundColor : '#fffff00' , position : 'relative'}}>
                  <View>
                    <Image  style={[styles.coreImage , {position : 'absolute', top : 10 , left : 10}]} source={require('./assets/img1.jpg')} />
                    <View style={[styles.coreImage , {position : 'absolute', top : 0 , right : 10, backgroundColor : '#fff', flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}]}>
                        <Icon name="ri-user-received-2-fill" size="38" color="#f9af21" />
                    </View>
                  </View>
              <View style={{flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center' , height : '100%'}}>

                  <View style={styles.centerCircle}>
                          <View style={styles.centerImage}>
                              <Image style={styles.coreImage} source={require('./assets/center.jpg')} />
                          </View>
                    </View>
              </View>
              <Image  style={[styles.coreImage , {position : 'absolute', bottom : 0 , right : 10}]} source={require('./assets/sarah-parmenter.png')} />
              <View style={[styles.coreImage , {position : 'absolute', bottom : 0 , left : 10, backgroundColor : '#fff', flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}]}>
                        <Icon name="ri-heart-2-fill" size="38" color="red" />
                    </View>
          </View>

      </View>
      {/* Circle */}
      {/* buttons */}
        <View style={{flexDirection : 'column' , gap : 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={[styles.text , styles.loginBtn]}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <LinearGradient colors={['#f9af21','#f8413a']}  style={{overflow : 'hidden' , borderRadius : 12}}>
              <Text style={[styles.text, styles.loginBtn, styles.signUp]}>Sign Up</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>
      {/* buttons */}

    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text : {
    color : '#282935'
  },font1 : {
    fontSize : 50, fontWeight : '800',
  }, font2 : {
    fontSize : 23, width : windowWidth/1.8
  }, loginBtn :{
      borderColor : '#f0f1f5', borderWidth : 0.9, width : '100%', flexDirection : 'row' , margin : 'auto',textAlign : 'center', paddingHorizontal : 20 , paddingVertical : 16, fontWeight : '600', fontSize : 17, overflow : 'hidden'
  },signUp : {
    color : '#fff'
  },centerImage : { position : 'absolute',borderRadius : 50, overflow : 'hidden', flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center' , width : '100%',height : '100%' },
  centerCircle : {height : windowHeight/4.9 , borderColor : '#f8413a' , borderRadius : 320 , width : windowWidth/2.35 , borderWidth : 3.5 ,borderStyle: 'dashed' , backgroundColor : '#fffff00', position : 'relative'},
  coreImage : {height : 70 , width : 70, overflow : 'hidden' , borderRadius : 120 ,borderWidth : 3 , borderColor : '#fff'}
});

export default Login;
