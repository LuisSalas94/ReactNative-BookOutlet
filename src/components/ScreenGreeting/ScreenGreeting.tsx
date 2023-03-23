import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../hooks/storeHooks';

const ScreenGreeting = () => {
  const {user} = useAppSelector(state => state.user);

  return (
    <View>
      <Text style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello</Text> {user}
      </Text>
      <Text style={styles.greetingText2}>What are we reading today?</Text>
    </View>
  );
};

export default ScreenGreeting;

const styles = StyleSheet.create({
  greetingContainer: {
    fontSize: 18,
  },
  greetingText: {
    color: '#d1618a',
  },
  greetingText2: {
    paddingTop: 4,
    letterSpacing: 0.5,
    fontWeight: '400',
  },
});
