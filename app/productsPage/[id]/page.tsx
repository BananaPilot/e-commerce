"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function ProductsPage(props) {
  const [data, setData] = useState("");
  const [size, setSize] = useState("");
  const [user, setUser] = useState("");
  const { data: session, status } = useSession();

  const getUser = async () => {
    const response = fetch(`${process.env.NEXT_PUBLIC_USER_API}/getOne/?email=${session?.user.email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  const getDataProduct = async () => {
    const response = await fetch(`/api/products/${props.params.id}`);
    const data = await response.json();

    setData(data);
  };

  const AddToCart = async () => {
    if (size === "") {
      setSize("38")
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USER_API}/${user[0]?._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart: { data, size },
        }),
      }
    );
  };

  useEffect(() => {
    getDataProduct();
    getUser();
  }, []);

  return (
    <>
      <div className="mt-32 m-5 flex justify-evenly">
        <div className="w-[600px] ml-10">
          <img src={data.image} />
        </div>
        <div className="mr-20">
          <div className="flex flex-col gap-y-3">
            <h2 className="mb-5 text-xl font-bold">{data.title}</h2>
            <p>{data.gender}</p>
            <p className="text-right text-xl">{data.price} €</p>
          </div>
          <div>
            <h3 className="font-semibold">Sizes:</h3>
            <div className="grid grid-cols-2 mt-3 gap-3">
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                38
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                39
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                40
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                41
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                42
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                43
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                44
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                45
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                46
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                47
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                48
              </button>
              <button
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="border w-40 h-10 hover:bg-gray-200"
              >
                49
              </button>
            </div>
            <div className="my-5 flex justify-between">
              <h2 className="text-lg font-semibold">Selected size:</h2>
              <p className="font-normal">{size}</p>
            </div>
            <div className="flex gap-4 flex-col mt-6">
              <button
                onClick={(e) => {
                  AddToCart();
                  e.target.innerText = "Added to cart"
                  setTimeout(() => {
                    e.target.innerText = "Add to cart"
                  }, 2000)
                }}
                className="text-white text-lg font-bold bg-violet-700 rounded-lg h-12 hover:bg-violet-500"
              >
                Add to Cart
              </button>
              <button className="text-white text-lg font-bold bg-black rounded-lg h-12 hover:bg-zinc-800">
                Favourites
              </button>
            </div>
            <div className="mt-10">
              <hr className="border-t-gray-400" />
              <div className="mt-10">
                <h3 className="font-semibold">Description:</h3>
                <p className="w-60 mt-5 text-lg">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
