"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Cart() {
  const [data, setData] = useState("");
  const [visible, setVisible] = useState("none");

  const { userData: session, status } = useSession();

  const deleteItem = async (props) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USER_API}/${data[0]?._id}?productID=${props.data._id}`,
      {
        method: "PATCH",
        headers: { "Contetn-Type": "application/json" },
      }
    );
    getUser();
  };

  const getUser = async () => {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_USER_API}?email=${session?.user.email}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (status === "authenticated") {
      getUser();
    }
    setData("");
  }, [status]);

  let total = 0;

  data[0]?.cart.forEach((element) => {
    total += +element.data.price;
  });

  return (
    <>
      <div className="flex flex-col m-10 mt-32 gap-5">
        {data[0]?.cart?.length > 0 ? (
          data[0]?.cart?.map((element, key) => (
            <div
              key={key}
              className="flex border-b border-t border-gray-200 p-2"
            >
              <Link href={`/productsPage/${element.data._id}`} className="w-40">
                <img src={element.data.image} />
              </Link>
              <div className="ml-10 w-32 flex flex-col gap-3">
                <Link
                  href={`/productsPage/${element.data._id}`}
                  className="font-semibold"
                >
                  {element.data.title}
                </Link>
                <p>{element.data.gender}</p>
                <select defaultValue={element.size}>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                </select>
                <button
                  onClick={() => {
                    deleteItem(element);
                  }}
                  className="bg-black text-white rounded-xl p-2"
                >
                  Delete
                </button>
              </div>
              <div className="flex justify-end flex-grow">
                <p className="font-semibold text-lg">{element.data.price} €</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-96 text-center">
            <h1 className="w-[600px] font-bold text-6xl">
              Nothing to see here, try adding something to your cart...
            </h1>
          </div>
        )}
      </div>
      {data[0]?.cart.length > 0 ? (
        <div className="flex justify-center mt-24">
          <div className="w-[400px] p-2 h-fit grid justify-center bg-white rounded-xl drop-shadow-2xl">
            {data[0]?.cart?.map((element, key) => (
              <div className="flex justify-between" key={key}>
                <p>{element.data.title}</p>
                <p>{element.data.price} €</p>
              </div>
            ))}
            <div className="flex justify-between my-2">
              <h3 className="font-semibold">Total:</h3>
              <p>{total} €</p>
            </div>
            <button
              onClick={(e) => {
                setVisible("flex");
              }}
              className="text-white bg-violet-700 h-11 w-72 my-4 rounded-xl text-2xl font-bold hover:bg-violet-500"
            >
              Procede with checkout
            </button>
            <div
              style={{
                display: visible,
              }}
              className="text-white bg-red-500 w-64 text-center rounded-xl m-3 px-8;"
            >
              sorry but this feature is not available at the moment
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Cart;
