import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  synopsis: string;
  description: string;
}

const Synopsis = ({synopsis, description}: Props) => {
  return (
    <View style={styles.synopsisContainer}>
      <Text style={styles.synopsisTitleStyle}>Synopsis</Text>
      <Text style={styles.synopsisStyle}>{synopsis}</Text>
      <Text style={styles.synopsisStyle}>{description}</Text>
    </View>
  );
};

export default Synopsis;

const styles = StyleSheet.create({
  synopsisContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  synopsisTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  synopsisStyle: {
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 20,
    marginTop: 10,
  },
});
