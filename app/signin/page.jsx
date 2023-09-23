"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { routes } from "@/routes";

function SignInPage(props) {
  useEffect(() => {
    checkURL();
  }, []);

  const [visible, setVisible] = useState("none");
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const checkURL = () => {
    if (props.searchParams.error === "CredentialsSignin") {
      setVisible("flex");
    }
  };

  const submitCredentials = () => {
    signIn("credentials", {
      email: user.email,
      password: user.password,
      callbackUrl: "/",
    });
  };

  const submit = (event) => {
    if (event.key === "Enter") {
      submitCredentials();
    }
  };
  console.log(user);
  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <div className="flex justify-center text-center">
            <div style={{ display: visible }} className="alert">
              Please make sure that your credentials are right before trying
              again
            </div>
          </div>
          <div className="grid justify-center">
            <input
              onKeyPress={submit}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="input"
              type="email"
              placeholder="Enter your email"
            />
            <input
              onKeyPress={submit}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                submitCredentials();
              }}
              className="text-white bg-violet-700 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-violet-500"
            >
              Log in
            </button>
          </div>
          <hr className="m-5 mx-10 border-t-gray-300" />
          <div className="flex justify-center">
            <Link
              href={routes.signup}
              className="text-center p-3 text-white bg-green-600 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-green-500"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
