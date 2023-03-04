import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {titleText, colors} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true} dotColor='white' activeDotColor={colors.buttons}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://i.blogs.es/a17c5d/como-hacer-sushi-maki-recetas-mexico/1366_2000.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', marginHorizontal: 20}}>
        <View style={{margin: 25}}>
          <Button
            title="SING IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.titleButton}
            onPress={()=>{
              navigation.navigate("SingIn")
            }}
          />
          <View style={{margin: 20}}>
            <Button
              title="Create an account"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f44336',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#f44336',
    fontSize: 15,
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
