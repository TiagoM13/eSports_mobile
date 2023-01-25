import { useEffect, useState } from "react";

import { GameCardProps } from "../interfaces/gameCard";

import { API_URL } from "../services/api";

export const useGame = () => {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch(`${API_URL.IP}:3333/games`)
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return { games }
}
