import React, { useState } from 'react';
import { View, Text, Image, ImageSourcePropType, Dimensions, } from 'react-native';
import { RectButton, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import { getBirds, getCategories } from '../../utils/data';

import ProfileImage from '../../components/ProfileImage';

import userPhoto from '../../assets/images/profile.jpg'
import { useNavigation } from '@react-navigation/native';

interface Props {
  name: string;
  image: ImageSourcePropType;
  about: string;
  id: string;
  price: string;
}

const { height, width } = Dimensions.get('window');

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Birds');

  const birds = getBirds();
  const categories = getCategories();

  const { navigate } = useNavigation();

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
  }

  function handleNavigationToBird(bird: Props) {
    navigate('Bird', { bird })
  }

  const ProductItem = (bird: Props) => {
    return (     
      <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
        <RectButton 
          onPress={() => handleNavigationToBird(bird)}
          activeOpacity={0.7} 
          key={bird.id} 
        >
          <Image style={styles.image} source={bird.image}/> 
           <AntDesign style={styles.heartIcon} name="hearto" size={24} color="#FFF" />
          <Text style={styles.textBird}>{bird.name}</Text>
          <Text style={styles.birdPrice}>{bird.price}</Text>     
        </RectButton> 
      </View>
    )
  };

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
      <View style={{ flexDirection: 'row', marginTop: 20, }}>
        {categories.map((category, index) => {
          return (
            <RectButton onPress={() => changeCategory(category.name)} key={index} style={[ styles.button, { backgroundColor: category.color } ]}>
                <Image source={category.image}/>
                <Text style={styles.animalText}>{category.name}</Text>
            </RectButton>
          )
        })}
      </View>

      <Text style={styles.favoriteAnimal}>Popular</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        data={birds.filter(bird => {
          return (                    
            bird.category.includes(selectedCategory) || selectedCategory === "All"                   
            )
          })}
        keyExtractor={(item)=> String(item.id)} 
        renderItem={({item}) => <ProductItem {...item}/>}
        numColumns={2}
      />
    </View>
  );
}

export default Home;