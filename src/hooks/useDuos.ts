import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GameParams } from "../@types/navigation";
import { DuoCardProps } from "../components/DuoCard";
import { API_URL } from "../services/api";

export const useDuos = () => {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`${API_URL.IP}:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, []);

  return { duos, game }
}
