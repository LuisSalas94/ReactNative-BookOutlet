import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FormButton from '../components/LoginSignup/FormButton';

import FormInput from '../components/LoginSignup/FormInput';
import SocialButton from '../components/LoginSignup/SocialButton';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to Continue</Text>
      <Image style={styles.logo} source={require('../../assets/sign_up.png')} />
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="person-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={() => alert('Sign In Clicked!')}
      />
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="logo-facebook"
        color="#3f494a"
        backgroundColor="#fff"
        iconColor="#4867aa"
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="logo-google"
        color="#3f494a"
        backgroundColor="#fff"
        iconColor="#de4d41"
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an account yet? {'\n'}{' '}
          <Text style={styles.navButtonText2}>Create an account</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 320,
    width: 320,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#3f494a',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3f494a',
    textAlign: 'center',
  },
  navButtonText2: {
    color: '#4867aa',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
