import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number
  name: string
}

interface GameData {
  count: number
  results: Game[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setErrro] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<GameData>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setErrro(err.message);
      });

    return () => controller.abort()
  }, []);

  return {games, error}
}

export default useGames