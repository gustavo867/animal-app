import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 20,
    borderColor: '#FFB627',
    borderWidth: 1.5,
  },
  name: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#000'
  },
  owner: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)'
  },
})

export default styles