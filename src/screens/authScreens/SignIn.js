import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import {titleText, colors} from '../../global/styles';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import {parameters} from '../../global/styles';

export default function SingIn({navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type={'arrow-left'} navigation={navigation}/>

      <View>
        <Text style={titleText}> Sing In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please, enter your email and password</Text>
        <Text style={styles.text1}>Registered with your accout</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />
        </View>

        <View style={styles.textInput2}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="awesome-font"
            />
          </Animatable.View>
          <Animatable.View>
            <TextInput
              placeholder="Password"
              style={{textAlign: 'left'}}
              ref={textInput2}
            />
          </Animatable.View>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInRight'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3}}
              type="material"
              style={{marginRight: 20}}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{margin: 25}}>
        <Button
          title="SING IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.titleButton}
          onPress={()=>{
            navigation.navigate('RootClientTabs')
          }}>
        </Button>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          I forgot my password
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 28, marginBottom: 10}}>
        <Text style={{fontWeight: '900', fontSize: 20}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 25}}>
        <SocialIcon
          title="Sing in with Facebook"
          button
          type="facebook"
          onPress={() => {}}
          style={styles.socialicon}
        />
      </View>

      <View style={{marginHorizontal: 25, marginTop: 10}}>
        <SocialIcon
          title="Sing in with Google"
          button
          type="google"
          onPress={() => {}}
          style={styles.socialicon}
        />
      </View>

      <View style={{backgroundColor: '#dedede', marginTop: 10, flex: 1}}>
        <View style={{alignItems: 'flex-start', marginLeft: 15, marginTop: 10}}>
          <Text style={{...styles.text1}}>New on Express Food?</Text>
        </View>
        <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey1,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 20,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
  },
  socialicon: {
    borderRadius: 12,
    height: 50,
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
