import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: '#ffffff',
    ...StyleSheet.absoluteFillObject,
  },
  cajaRoja: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    top: 0,
  },
});

export default styles;
