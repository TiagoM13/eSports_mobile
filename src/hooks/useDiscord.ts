import { useState } from "react";

import { API_URL } from "../services/api";

export const useDicordSelected = () => {
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  async function getDicordUser(adsId: string) {
    fetch(`${API_URL.IP}:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord))
  }

  function handleDisableDiscordSelected() {
    setDiscordDuoSelected('')
  }

  return { discordDuoSelected, getDicordUser, handleDisableDiscordSelected }
}
