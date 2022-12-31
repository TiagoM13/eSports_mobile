import { SafeAreaView, TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ImgLogo from '../../assets/logo-nlw-esports.png';

import { DuoCard } from '../../components/DuoCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoMatch } from '../../components/DuoMatch';

import { useDuos } from '../../hooks/useDuos';
import { useDicordSelected } from '../../hooks/useDiscord';
import { useNativeRoutes } from '../../hooks/useNavigate';

import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
  const { duos, game } = useDuos();
  const { handleGoBack } = useNativeRoutes();
  const { discordDuoSelected, getDicordUser, handleDisableDiscordSelected } = useDicordSelected();

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>


          <Image
            source={ImgLogo}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerURL }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDicordUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios públicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={handleDisableDiscordSelected}
        />
      </SafeAreaView>
    </Background>
  );
}
