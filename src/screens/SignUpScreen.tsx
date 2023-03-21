import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FormButton from '../components/LoginSignup/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';
import FormInput from '../components/LoginSignup/FormInput';
import {windowHeight} from '../utils/Dimensions';
import {useSignup} from '../hooks/useSignup';

//https://www.youtube.com/watch?v=20TSEoJkg5k&ab_channel=BornToCode
//https://console.firebase.google.com/project/proyectofirebase-9d69f/authentication/users

const SignUpScreen = () => {
  const {email, setEmail, password, setPassword, navigation, signInUser} =
    useSignup();

  const user =
    email.charAt(0).toUpperCase() +
    email.substring(0, email.indexOf('@')).slice(1);

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
        <FormButton buttonTitle="Sign In" onPress={() => signInUser(user)} />
        {/*   {isSignedIn ? (
          <FormButton buttonTitle="Sign Out" onPress={() => signOutUser()} />
        ) : (
          <FormButton buttonTitle="Sign In" onPress={() => signInUser()} />
        )} */}

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity>
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
            Don't have an account yet? {'\n'}{' '}
            <Text style={styles.navButtonText2}>Create an account</Text>
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
    fontSize: 14,
    fontWeight: '300',
    color: '#3f494a',
    textAlign: 'center',
  },
  navButtonText2: {
    color: '#d1618a',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: '300',
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
