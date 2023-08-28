"use client";

import React, {useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NavBarContent from "./NavBarContent";
import { routes } from "@/routes";

function Header() {
  const { data: session, status } = useSession();
  const [navbarContent, setNavbarContent] = useState("");
  const [height, setHeight] = useState("64px");

  return (
    <div
      style={{
        height: height,
      }}
      onMouseLeave={() => {
        setNavbarContent("");
        setHeight("64px");
      }}
      className="fixed transition-all duration-300 pb-2 top-0 z-20 w-full bg-white"
    >
      <div className="flex p-3 bg-transparent">
        <Link
          onMouseEnter={() => {
            setNavbarContent("");
            setHeight("64px");
          }}
          className="w-32 mt-1"
          href={routes.home}
        >
          <img
            draggable="false"
            className="cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"
          />
        </Link>
        <div>
          <nav className="absolute left-1/3 xl:left-[45%] p-1">
            <ul className="flex gap-x-10">
              <Link
                onMouseEnter={() => {
                  if (navbarContent === "") {
                    setTimeout(() => {
                      setNavbarContent("products");
                    }, 200);
                  } else {
                    setNavbarContent("products");
                  }
                  setHeight("350px");
                }}
                className="text-lg hover:border-b border-gray-400"
                href={routes.products}
              >
                Products
              </Link>
              <Link
                onMouseEnter={() => {
                  if (navbarContent === "") {
                    setTimeout(() => {
                      setNavbarContent("men");
                    }, 200);
                  } else {
                    setNavbarContent("men");
                  }
                  setHeight("350px");
                }}
                className="text-lg hover:border-b border-gray-400"
                href={routes.men}
              >
                Men
              </Link>
              <Link
                onMouseEnter={() => {
                  if (navbarContent === "") {
                    setTimeout(() => {
                      setNavbarContent("women");
                    }, 200);
                  } else {
                    setNavbarContent("women");
                  }
                  setHeight("350px");
                }}
                className="text-lg hover:border-b border-gray-400"
                href={routes.women}
              >
                Women
              </Link>
              <Link
                onMouseEnter={() => {
                  if (navbarContent === "") {
                    setTimeout(() => {
                      setNavbarContent("sales");
                    }, 200);
                  } else {
                    setNavbarContent("sales");
                  }
                  setHeight("350px");
                }}
                className="text-lg hover:border-b border-gray-400"
                href={routes.products}
              >
                Sales
              </Link>
            </ul>
          </nav>
        </div>
        {status === "unauthenticated" || status === "loading" ? (
          <div
            onMouseEnter={() => {
              setNavbarContent("");
              setHeight("64px");
            }}
            className="flex absolute right-24"
          >
            <Link
              className="text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3"
              href={routes.signin}
            >
              Sign in
            </Link>
          </div>
        ) : (
          <div
            onMouseEnter={() => {
              setNavbarContent("");
              setHeight("64px");
            }}
            className="flex absolute right-24"
          >
            <img className="w-10 rounded-full" src={session?.user.image} />
            <Link
              className="text-white bg-violet-700 rounded-xl p-2 hover:bg-violet-500 mx-3"
              href={routes.signout}
            >
              Sign out
            </Link>
          </div>
        )}
        <div className="flex absolute right-2">
          <Link
            onMouseEnter={() => {
              setNavbarContent("");
              setHeight("64px");
            }}
            href={routes.favourites}
            className="bg-violet-700 rounded-full mx-1 hover:bg-violet-500"
          >
            <span className="text-white p-2 material-symbols-outlined">
              &#xe87d;
            </span>
          </Link>
          <Link
            onMouseEnter={() => {
              setNavbarContent("");
              setHeight("64px");
            }}
            href={routes.cart}
            className="bg-black rounded-full mx-1 hover:bg-zinc-900"
          >
            <span className="text-white p-2 material-symbols-outlined">
              &#xe8cc;
            </span>
          </Link>
        </div>
      </div>
      <NavBarContent props={navbarContent} />
    </div>
  );
}

export default Header;
