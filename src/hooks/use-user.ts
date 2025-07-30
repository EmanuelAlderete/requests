import { useState } from "react";
import { fetcher } from "../helpers/api";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [requestStatus, setRequestStatus] = useState<
    "idle" | "loading" | "saving"
  >("idle");

  async function getUser(username: string) {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
  };
}
