import "./global.css";
import React from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import { Providers } from "./Providers";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Home Layout</h1>
        <Providers>{children}</Providers>
        <Sidebar />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <button>
          <Link href="profile/settings">Dashboard</Link>
        </button>
        <button>
          <Link href="profile">Profile</Link>
        </button>
      </body>
    </html>
  );
}
