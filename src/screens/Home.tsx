import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../src/assets/logo-nlw-esports.png';

import { Background } from '../components/Background';
import { GameCard } from '../components/GameCard';
import { Heading } from '../components/Heading';

import { useGame } from '../hooks/useGame';
import { useNativeRoutes } from '../hooks/useNavigate';

import { styles } from './styles';

export function Home() {
  const { games } = useGame();
  const { handleOpenGame } = useNativeRoutes();

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView >
    </Background>
  );
}
