import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensaionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.2,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.styleText}>
        W : {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 50,
    // height: 50,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  styleText: {
    paddingTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
});
