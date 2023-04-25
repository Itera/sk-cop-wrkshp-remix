import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <ul>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}