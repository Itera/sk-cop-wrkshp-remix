import { Link } from "@remix-run/react";

export default function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to="/">Go back</Link>
    </div>
  );
}