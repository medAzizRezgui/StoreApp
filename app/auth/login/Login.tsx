"use client";
import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useRouter();
  useEffect(() => {
    if (user) navigate.push("/profile/settings");
  }, [user, loading]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle Login Function
  const handleLogin = async (e: string, a: string) => {
    setIsLoading(true);
    await logInWithEmailAndPassword(e, a);
    setIsLoading(false);
  };
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
        <input
          className={"py-2 w-full px-4 border-2 my-4"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className={"w-full rounded-[8px] px-4 py-2 bg-blue-400 text-white"}
          onClick={() => handleLogin(email, password)}
        >
          Login
        </button>
        <div>
          <Link href="../../auth/reset">
            <p className={"text-green-500 py-2 text-left"}> Forgot Password</p>
          </Link>
        </div>
        {isLoading && <h1>Loading...</h1>}
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
export default Login;
