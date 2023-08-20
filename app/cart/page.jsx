"use client";

import CookieHelper from "@/cookieHelper";
import React, { useEffect, useState } from "react";

export const metadata = {
  title: "Cart",
};

function Cart() {
  const [data, setData] = useState("");

  const getProducts = async () => {
    const response = await fetch(
      `/api/products/multipleProducts?ids=${CookieHelper.getCookie(
        "cartItems"
      )}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getProducts()
  }, []);
  
  let a = 0

  for (const key in data) {
    a += +data[key].price
  }

  return (
    <>
      <div className="flex flex-col m-10 mt-32 gap-5">
        {data.length > 0 ? (
          data.map((element, key) => (
              <div key={key} className="flex border-b border-t border-gray-200 p-2">
                <div className="w-40">
                  <img src={element.image} />
                </div>
                <div className="ml-10 w-32 flex flex-col gap-3">
                  <h3 className="font-semibold">{element.title}</h3>
                  <p>{element.gender}</p>
                  <select>
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
                  <input type="number" max={10} min={1} />
                  <button className="bg-black text-white rounded-xl p-2">
                    Delete
                  </button>
                </div>
                <div className="flex justify-end flex-grow">
                  <p className="font-semibold text-lg">{element.price} €</p>
                </div>
              </div>
          ))
        ) : (
          <></>
        )}
        <div>
          
        </div>
      </div>
    </>
  );
}

export default Cart;
