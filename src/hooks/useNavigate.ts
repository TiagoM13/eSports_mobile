import { useNavigation } from "@react-navigation/native";

import { GameCardProps } from "../components/GameCard";

export const useNativeRoutes = () => {
  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerURL }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerURL });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return { handleOpenGame, handleGoBack }
}
