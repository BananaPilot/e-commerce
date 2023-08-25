"use client";

import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import CookieHelper from "ez-cookie";

function SignOut() {
  const { data: session, status } = useSession();

  const toHome = () => {
    if (status === "unauthenticated") {
      location.replace("/");
    }
  };

  useEffect(() => {
    CookieHelper.clearCookies();
    toHome();
  }, [session]);

  return (
    <>
      <div className="flex justify-center">
        <div className="container text-center gap-10">
          <h1 className="text-3xl font-bold">Sign out</h1>
          <p>Are you sure you want to sign out?</p>
          <div className="flex justify-center">
            <button
              onClick={async () => {
                signOut();
              }}
              className="text-white bg-violet-700 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-violet-500"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignOut;
