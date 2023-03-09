import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import { titleText, colors } from '../../global/styles';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import { parameters } from '../../global/styles';
import { Formik } from 'formik';
import { auth } from '../../fb/fbauth';
import { SignInContext } from '../../contexts/authContext';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SingIn({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext)
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const InputEmail = useRef(1)
  const InputPassword = useRef(2)
  async function signInFunction(data) {
    console.log(data)
    try {
      const { password, email } = data
      const user = await signInWithEmailAndPassword(auth,email, password)
      if (user) {
        console.log('login success')
        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } })
      }
    }
    catch (error) {
      Alert.alert(
        error.name,
        error.message
      )
    }

  }

  return (
    <View style={styles.container}>


      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={titleText}>Sign-In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1} >Please enter the email and password</Text>
        <Text style={styles.text1} >registered with your account</Text>
      </View>


      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          signInFunction(values)
        }}
      >
        {(props) => (
          <View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  ref={InputEmail}
                  autoFocus={true}
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                />
              </View>



              <View style={styles.textInput2}>
                <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400} >
                  <Icon
                    name="lock"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{}}


                  />
                </Animatable.View>

                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  ref={InputPassword}
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onFocus={() => {
                    setTextInput2Fossued(false)
                  }}

                  onBlur={() => {
                    setTextInput2Fossued(true)
                  }}
                />

                <Animatable.View animation={textInput2Fossued ? "" : "fadeInLeft"} duration={400} >

                  <Icon
                    name="visibility-off"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{ marginRight: 10 }}

                  />

                </Animatable.View>
              </View>

            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>




      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}> Forgot Password ?</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialicon}
          onPress={() => { }}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialicon}
          onPress={() => { }}
        />
      </View>
      <View style={{ backgroundColor: colors.grey5, flex: 1 }}>
        <View style={{ marginTop: 25, marginLeft: 20 }}>
          <Text style={{ ...styles.text1, }}>New on XpressFood ?</Text>
        </View>


        <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => { navigation.navigate("SignUpScreen") }}
          />
        </View>
      </View>


    </View>
  )
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
    height: 50
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
    height: 50
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
