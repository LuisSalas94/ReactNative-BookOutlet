import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FormButton from '../components/LoginSignup/FormButton';
import FormInput from '../components/LoginSignup/FormInput';
import SocialButton from '../components/LoginSignup/SocialButton';
import {authentication} from '../../firebase/firebase-config.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const navigation = useNavigation();

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log('Success', re);
        setIsSigned(true);
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register to Continue</Text>
      <Image style={styles.logo} source={require('../../assets/sign_up.png')} />

      <View style={styles.container2}>
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
        <FormButton buttonTitle="Register" onPress={() => registerUser()} />
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.navButtonText}>
            Don't have an account yet? {'\n'}{' '}
            <Text style={styles.navButtonText2}>Create an account</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/*   <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity> */}

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
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3f494a',
    textAlign: 'center',
  },
  navButtonText2: {
    color: '#d1618a',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
