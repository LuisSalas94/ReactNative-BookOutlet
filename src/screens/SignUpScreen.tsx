import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FormButton from '../components/LoginSignup/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';
import FormInput from '../components/LoginSignup/FormInput';
import {windowHeight} from '../utils/Dimensions';
import {authentication} from '../../firebase/firebase-config.js';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';

//https://www.youtube.com/watch?v=20TSEoJkg5k&ab_channel=BornToCode
//https://console.firebase.google.com/project/proyectofirebase-9d69f/authentication/users

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigation = useNavigation();

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log('Success', re);
        setIsSignedIn(true);
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  const signOutUser = () => {
    signOut(authentication)
      .then(re => {
        console.log('Success', re);
        setIsSignedIn(false);
      })
      .catch(re => {
        console.log('Error: ', re);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="arrow-back"
          size={30}
          color="#3f494a"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Sig In</Text>
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
        {isSignedIn ? (
          <FormButton buttonTitle="Sign Out" onPress={() => signOutUser()} />
        ) : (
          <FormButton buttonTitle="Sign In" onPress={() => signInUser()} />
        )}
        {/*     <FormButton buttonTitle="Sign In" onPress={() => signInUser()} /> */}

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
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.navButtonText}>
            Have an account? {'\n'}{' '}
            <Text style={styles.navButtonText2}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    marginTop: windowHeight / 10,
    width: '100%',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  iconContainer: {
    position: 'relative',
    right: '45%',
    bottom: '5%',
    borderWidth: 1,
    padding: 8,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});
