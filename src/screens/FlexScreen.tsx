import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
    color: 'white',
    backgroundColor: 'red',
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
    color: 'white',
    backgroundColor: 'darkorange',
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
    color: 'white',
    backgroundColor: 'green',
  },
});
