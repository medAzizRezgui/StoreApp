"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className={
        "container flex items-center justify-center mx-auto h-[100vh] border-amber-300 border-2"
      }
    >
      <h1>Home</h1>
      <Link href={"auth/register"}>
        <button className={"py-6 px-6 rounded-[8px] bg-blue-400"}>
          Register
        </button>
      </Link>
      <Link href={"auth/login"}>
        <button className={"py-6 px-6 rounded-[8px] bg-amber-400"}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Home;
