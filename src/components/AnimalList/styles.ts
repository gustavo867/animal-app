import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  animalText: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    lineHeight: 24,
  },
  birds: {
    width: width / 3,
    backgroundColor: '#BEE5BF',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    flexDirection: 'row',
  },
  dogs: {
    width: width / 3.2,
    backgroundColor: '#FFD1BA',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    flexDirection: 'row',
  },
  cats: {
    width: width / 3.7,
    backgroundColor: 'rgba(206, 125, 165, 0.4)',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
})

export default styles