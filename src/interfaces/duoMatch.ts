import { ModalProps } from "react-native";

export interface IDuoMatch extends ModalProps {
  discord: string;
  onClose: () => void;
}
