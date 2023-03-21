import {
  Outlet,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        {'There will be something below ⬇'}
        <Outlet />
      </body>
    </html>
  );
}
