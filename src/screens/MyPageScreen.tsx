import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyPage from '../components/PersonalInfo/MyPage';

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
      <MyPage />
    </View>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
