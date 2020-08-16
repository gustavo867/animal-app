import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface ImageProps {
  img: ImageSourcePropType;
  name?: string;
  owner?: boolean;
}

const ProfileImage: React.FC<ImageProps> = ({ img }) => {
  return (
    <Image style={styles.image} source={img}/>
  );
}

export default ProfileImage;