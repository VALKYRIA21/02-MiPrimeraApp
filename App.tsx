import React from 'react';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {DimensaionesScreen} from './src/screens/DimensaionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
import {TareaScreen} from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TareaScreen />
    </SafeAreaView>
  );
  // return <ContadorScreen />;
  // return <HolaMundoScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
});

export default App;
