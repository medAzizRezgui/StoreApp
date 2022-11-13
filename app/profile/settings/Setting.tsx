"use client";
import { auth, db, logout } from "../../../firebaseConfig";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Setting = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState(null);
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);
  return (
    <div>
      {name && !loading ? (
        <>
          <h1 className={"text-cyan-400"}>Hello from Setting page,{name}</h1>
          <Link href={"/"}>
            <button className="dashboard__btn" onClick={logout}>
              Logout
            </button>
          </Link>
        </>
      ) : (
        loading && (
          <Link href={"../../auth/login"}>
            <h1>Loading</h1>
          </Link>
        )
      )}
    </div>
  );
};
export default Setting;
