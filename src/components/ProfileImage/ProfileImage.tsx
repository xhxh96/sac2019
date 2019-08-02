import React, { FunctionComponent } from 'react';
import { Image, ImageSourcePropType, ImageStyle } from 'react-native';
import styles from './styles';

interface Props {
  imageSource: ImageSourcePropType;
  style?: ImageStyle;
}

const ProfileImage: FunctionComponent<Props> = ({ imageSource, style }) => (
  <Image style={[styles.imageContainer, style]} source={imageSource} />
);

export default ProfileImage;
