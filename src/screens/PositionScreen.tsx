import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/Styles';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Position</Text>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />

      <View style={styles.cajaRoja} />
    </View>
  );
};
