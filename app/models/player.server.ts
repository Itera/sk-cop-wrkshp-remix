interface Player {
  name: string;
}

// TODO: store player data somewhere (probably in the database)
export async function getPlayerInfo(): Promise<Player> {
  return {
    name: "Arnold"
  };
}
