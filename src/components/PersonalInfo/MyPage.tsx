import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import {useMyPage} from '../../hooks/useMyPage';

const MyPage = () => {
  const {email, signOutUser, user, createMobilePhoneNumber} = useMyPage();

  return (
    <View style={styles.container}>
      <Text style={styles.myPage}>My Page</Text>
      <View>
        <View style={styles.icon}>
          <Icon name="person-circle-outline" size={80} color="#C084fc" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            <Text style={styles.innerTextStyle}>User: </Text>
            {user}
          </Text>
          <Text style={styles.textStyle}>
            <Text style={styles.innerTextStyle}>Email: </Text>
            {email}
          </Text>
          <Text style={styles.textStyle}>
            <Text style={styles.innerTextStyle}>Unique ID: </Text>
            {uuid.v4().slice(0, 8)}
          </Text>
          <Text style={styles.textStyle}>
            <Text style={styles.innerTextStyle}>Phone: </Text>
            {createMobilePhoneNumber('UK')}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logOutBtn} onPress={() => signOutUser()}>
        <Text style={styles.logOutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  myPage: {
    fontSize: 28,
    paddingBottom: 20,
  },
  icon: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.2,
    marginBottom: 20,
  },
  innerTextStyle: {
    fontWeight: 'bold',
  },
  logOutBtn: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#C084fc',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
  logOutText: {
    color: '#C084fc',
    fontSize: 18,
  },
});
