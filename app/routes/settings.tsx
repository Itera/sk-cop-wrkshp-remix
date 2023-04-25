import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPlayerInfo } from "~/models/player.server";

export const loader = async () => {
  return json({ player: await getPlayerInfo() });
};

export default function Settings() {
  const { player } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Settings</h1>
      <p>TODO: set player name here (current: {player.name})</p>
      <Link to="/">Go back</Link>
    </div>
  );
}