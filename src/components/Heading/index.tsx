import { View, Text } from 'react-native';
import { IHeading } from '../../interfaces/heading';

import { styles } from './styles';

export function Heading({ title, subtitle, ...rest }: IHeading) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title} >
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}
