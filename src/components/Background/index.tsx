import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { IBackground } from '../../interfaces/background';

import { styles } from './styles';

export function Background({ children }: IBackground) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
