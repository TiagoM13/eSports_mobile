import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, ImageBackground, Text } from 'react-native';
import { IGameCard } from '../../interfaces/gameCard';
import { THEME } from '../../theme';

import { styles } from './styles';

export function GameCard({ data, ...rest }: IGameCard) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerURL }}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
