import { TouchableOpacityProps } from "react-native";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: string;
  }
  bannerURL: string;
}

export interface IGameCard extends TouchableOpacityProps {
  data: GameCardProps;
}
