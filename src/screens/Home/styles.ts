import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})

export default styles