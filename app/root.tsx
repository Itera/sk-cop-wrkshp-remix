import { Links, Outlet } from "@remix-run/react";


export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
      </head>
      <body>
        {'There will be something below ⬇'}
        <Outlet />
      </body>
    </html>
  );
}
