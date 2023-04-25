import { Link } from "@remix-run/react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>TODO: set player name here</p>
      <Link to="/">Go back</Link>
    </div>
  )
}