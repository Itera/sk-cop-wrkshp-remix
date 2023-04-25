import { Link } from "@remix-run/react";

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to="/">Go back</Link>
    </div>
  )
}