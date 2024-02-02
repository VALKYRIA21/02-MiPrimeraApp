import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  position?: 'bl' | 'br';
  onPress: () => void;
}

export const Fab = ({title, position = 'br', onPress}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.buttonLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <View style={styles.buttonFabStyle}>
          <Text style={styles.buttonFabTextStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.buttonLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 45)}>
          <View style={styles.buttonFabStyle}>
            <Text style={styles.buttonFabTextStyle}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  buttonLocation: {
    position: 'absolute',
    bottom: 45,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  buttonFabStyle: {
    backgroundColor: '#56c5d6',
    width: 90,
    height: 90,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  buttonFabTextStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
