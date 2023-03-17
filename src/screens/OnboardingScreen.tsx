import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import SkipButton from '../components/OnBoardingButtons/SkipButton';
import NextButton from '../components/OnBoardingButtons/NextButton';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      onSkip={() => navigation.navigate('LoginScreen')}
      onDone={() => navigation.navigate('LoginScreen')}
      pages={[
        {
          backgroundColor: '#f1f2f6',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img1-removebg-preview.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#F5EAEA',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img2-removebg-preview.png')}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#f1f2f6',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img3-removebg-preview.png')}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#F5EAEA',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img4-removebg-preview.png')}
            />
          ),
          title: 'Onboarding 4',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});
