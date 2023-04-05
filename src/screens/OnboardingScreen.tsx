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
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img1-preview-removebg-preview.png')}
            />
          ),
          title: 'Book Outlet',
          subtitle:
            'At Book Outlet, our core focus is Enchanting the Mind. This is our why, our purpose, our passion behind everything we do. We believe we are not just selling books, rather we are impacting the lives of millions of people both locally and across the globe. ',
        },
        {
          backgroundColor: '#FDF4FF',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img2-preview.png-removebg-preview.png')}
            />
          ),
          title: 'No just books',
          subtitle: 'We are known for our epic of new, used, and rare books.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img3-preview.png.png-removebg-preview.png')}
            />
          ),
          title: 'More to explore',
          subtitle:
            'Book Outlet regurlarly offers discounts of up to 90% off. Also, publishes fascinating features about a huge variety of topics.',
        },
        {
          backgroundColor: '#FDF4FF',
          image: (
            <Image
              style={styles.imageStyle}
              source={require('../../assets/onboarding-img4-preview.png.png-removebg-preview.png')}
            />
          ),
          title: 'Independent booksellers',
          subtitle:
            'Millions of books and other items are listed for sale by thousands of independent booksellers around the world.',
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
