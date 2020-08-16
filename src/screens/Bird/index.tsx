import React from 'react';
import { View, Text, ImageSourcePropType, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './styles';
import ProfileImage from '../../components/ProfileImage';

import userPhoto from '../../assets/images/profile.jpg'

interface Bird {
  name: string;
  image: ImageSourcePropType;
  about: string;
  id: string;
  price: string;
  rating: number;
}

interface birdProps {
  bird: Bird
}

const Bird: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const { bird } = route.params as birdProps

  function handleNavigateBack() {
    goBack()
  }

  const renderStars = () => {
    let stars = []

    for (let s =1; s <= 5; s++) {
      stars.push
      (
      <Ionicons 
        key={s} 
        name='ios-star' 
        size={16} 
        style={{ marginRight: 5 }}
        color={Math.floor(bird.rating) >= s ? "#F9A620" : '#FFD449'}
      />
      )
    }

    return <View style={{ flexDirection: 'row' }}>{stars}</View>
  }

  return (
    <View style={{ flex: 1, }}>
      <Image style={styles.image} source={bird.image}/>
      <RectButton onPress={handleNavigateBack} style={styles.backgroundIcon}>
       <Ionicons name="ios-arrow-back" size={24} color="black" />
      </RectButton>

      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text style={styles.name}>{bird.name}</Text>
          <Text style={styles.price}>{bird.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, }}>
          {renderStars()}
          <Text style={styles.rating}>{bird.rating}</Text>
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, }}>      
          <ProfileImage img={userPhoto} name="Mike Malik" owner={true}/>
        </View>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.about}>{bird.about}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10, }}>
          <RectButton style={styles.heartIcon}>
           <AntDesign name="hearto" size={24} color="black" />
          </RectButton>
          <RectButton style={styles.cartButton}> 
            <Text style={styles.textCart}>Add to cart</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default Bird;