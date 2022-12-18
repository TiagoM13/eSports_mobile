import { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import ImgLogo from '../../assets/logo-nlw-esports.png';

import { API_URL } from '../../services/api';

import { GameParams } from '../../@types/navigation';

import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`${API_URL.IP}:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, []);

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
              onConnect={() => []}
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
      </SafeAreaView>
    </Background>
  );
}
