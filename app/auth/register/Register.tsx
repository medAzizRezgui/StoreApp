"use client";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useRouter();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.push("/profile/settings");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
          onClick={register}
        >
          Register
        </button>

        <div className={"py-4"}>
          Already have an account?{" "}
          <Link className={"text-cyan-400"} href="../../auth/login">
            Login now.
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
