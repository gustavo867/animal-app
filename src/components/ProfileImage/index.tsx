import React from 'react';
import { View, Image, ImageSourcePropType, Text } from 'react-native';

import styles from './styles';

interface ImageProps {
  img: ImageSourcePropType;
  name?: string;
  owner?: boolean;
}

const ProfileImage: React.FC<ImageProps> = ({ img, name, owner }) => {
  return (
    <View style={{ flexDirection: 'row', }}>
      <Image style={[styles.image, {
        marginRight: name !== undefined ? 10 : 20
      }]} source={img}/>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.owner}>{owner === true ? 'owner' : ''}</Text>
      </View>
    </View>
  );
}

export default ProfileImage;