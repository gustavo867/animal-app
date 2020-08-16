import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: height / 2,
    width: width,
  },
  backgroundIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    position: 'absolute',
    zIndex: 2,
    marginTop: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
  container: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    flex: 1,
    marginTop: -30,
  },
  name: {
    fontSize: 34,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    letterSpacing: 2,
    padding: 20,
  },
  price: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 'bold',
    paddingRight: 20,
  },
  rating: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 10,
  },
  description: {
    fontSize: 22,
    paddingLeft: 20,
    marginTop: 5,
    lineHeight: 42,
  },
  about: {
    fontSize: 17,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cartButton: {
    width: width * 0.7,
    backgroundColor: '#FFB627',
    height: 54,
    marginBottom: 10,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCart: {
    fontSize: 18, 
    color: '#FFF'
  },
  heartIcon: {
    backgroundColor: '#ccc',
    width: width * 0.2, 
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 10,
  },
})

export default styles