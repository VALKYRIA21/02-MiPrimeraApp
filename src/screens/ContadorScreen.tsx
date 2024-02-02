import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Contador: {contador}</Text>
      <Fab title="+1" onPress={() => setContador(contador + 1)} position="br" />
      <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />
      {/* <Fab title="-1" /> */}
      {/* <TouchableOpacity style={styles.buttonLocationBL} onPress={restarUno}>
        <View style={styles.buttonFabStyle}>
          <Text style={styles.buttonFabTextStyle}>-1</Text>
        </View>
      </TouchableOpacity> */}
      {/* <Button onPress={sumarUno} title="+1" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 65,
    textAlign: 'center',
    top: -15,
  },
});
