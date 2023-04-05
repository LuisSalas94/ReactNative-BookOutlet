import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import FormButton from '../components/LoginSignup/FormButton';
import FormInput from '../components/LoginSignup/FormInput';
import {useLogin} from '../hooks/useLogin';

const LoginScreen = () => {
  const {email, setEmail, password, setPassword, navigation, registerUser} =
    useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register to Continue</Text>
      <Image style={styles.logo} source={require('../../assets/sign_up.png')} />

      <View style={styles.container2}>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail-outline"
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
        <FormButton buttonTitle="Register" onPress={() => registerUser()} />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#d1618a'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#d1618a'}]}>
            Privacy Policy
          </Text>
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.navButtonText}>
            Have an account? {'\n'}{' '}
            <Text style={styles.navButtonText2}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 20,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
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
    marginTop: 0,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#3f494a',
    textAlign: 'center',
  },
  navButtonText2: {
    color: '#d1618a',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});
