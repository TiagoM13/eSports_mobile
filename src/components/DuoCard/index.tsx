import { GameController } from 'phosphor-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { Duoinfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: string;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <Duoinfo
        label='Nome'
        value={data.name}
      />
      <Duoinfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
      />
      <Duoinfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <Duoinfo
        label='Chamada de áudio'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
