import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    alignItems: 'center',
  },
  bar: {
    marginLeft: 20,
  },
  favoriteAnimal: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    width: width * 0.8
  },
  animalText: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    lineHeight: 24,
  },
  button: {
    width: width / 3.3,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10,
    flexDirection: 'row',
  },
  image: {
    height: 180,
    width: 170,
    borderRadius: 20,
    marginLeft: 15,
  },
  textBird: {
    marginTop: 120,
    fontSize: 17,
    letterSpacing: 2,
    fontWeight: 'bold',
    position: "absolute",
    zIndex: 2,
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 30,
  },
  birdPrice: {
    fontSize: 17,
    letterSpacing: 2,
    fontWeight: 'bold',
    position: "absolute",
    zIndex: 2,
    marginTop: 150,
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 30,
  },
  birdContainer: {
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    zIndex: 2,
    marginLeft: 150,
    marginTop: 20,
  },
})

export default styles