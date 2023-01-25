export interface IDuocard {
  data: DuoCardProps;
  onConnect: () => void;
}

export interface DuoCardProps {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: string;
}
