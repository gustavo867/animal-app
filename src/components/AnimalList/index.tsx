import React from 'react';
import { ScrollView, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import birdIcon from '../../assets/images/icons/bird-icon.png'
import dogIcon from '../../assets/images/icons/dog-icon.png'
import catIcon from '../../assets/images/icons/cat-icon.png'

const AnimalList: React.FC = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: 20, }} horizontal={true}>
      <RectButton style={styles.birds}>
        <Image source={birdIcon}/>
        <Text style={styles.animalText}>Birds</Text>
      </RectButton>
      <RectButton style={styles.dogs}>
        <Image source={dogIcon}/>
        <Text style={styles.animalText}>Dogs</Text>
      </RectButton>
      <RectButton style={styles.cats}>
        <Image source={catIcon}/>
        <Text style={styles.animalText}>Cats</Text>
      </RectButton>
    </ScrollView>
  );
}

export default AnimalList;