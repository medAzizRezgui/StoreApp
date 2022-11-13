"use client";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../../../firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useRouter();
  useEffect(() => {
    if (loading) return;
    if (user) navigate.push("/profile/settings");
  }, [user, loading]);
  return (
    <div className="container mx-auto h-[100vh] ">
      <div
        className={
          "h-full w-[30%] mx-auto  flex items-center justify-center flex-col"
        }
      >
        <input
          className={"py-2 w-full px-4 border-2 my-4"}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className={"w-full rounded-[8px] px-4 py-2 bg-blue-400 text-white"}
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div className={"py-4"}>
          Dont have an account?{" "}
          <Link className={"text-cyan-400"} href="../../auth/register">
            Register now.
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Reset;
