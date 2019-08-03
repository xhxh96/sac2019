import React, { FunctionComponent } from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  children: string;
  onPress: Function;
}

const Button: FunctionComponent<Props> = ({ buttonStyle, textStyle, children, onPress }) => (
  <TouchableOpacity style={[styles.container, buttonStyle]} onPress={() => onPress()}>
    <Text style={[styles.text, textStyle]}>{children}</Text>
  </TouchableOpacity>
);
export default Button;
