import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import ProfileImage from '../../components/ProfileImage';
import AnimalList from '../../components/AnimalList';

import styles from './styles';

import userPhoto from '../../assets/images/profile.jpg'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton style={styles.bar}>
          <AntDesign name="bars" size={30} color="black" />
        </RectButton>
        <RectButton>
          <ProfileImage img={userPhoto}/>
        </RectButton>
      </View>
      <Text style={styles.favoriteAnimal}>Choice your Favorite Animal</Text>
      <AnimalList/>
    </View>
  );
}

export default Home;