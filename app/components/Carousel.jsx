"use client";

import React, { useEffect, useState } from "react";
import PreviewProducts from "./PreviewProducts";

function Carousel({ text_side, slice_min, slice_max, text }) {
  const [data, setData] = useState([]);
  const [left, setLeft] = useState("none");
  const [right, setRight] = useState("none");

  const getData = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
    if (text_side === "right") {
      setRight("contents");
      setLeft("none");
    }
    if (text_side === "left") {
      setLeft("contents");
      setRight("none");
    }
  }, []);

  return (
    <div className="w-full mt-[400px] flex justify-center">
      <h1 style={{ display: left }} className="text-white text-[5vw] font-bold">
        {text}
      </h1>
      <div className="w-[85%] p-10 overflow-scroll flex">
        <div className="flex gap-10">
          {data.length > 0 ? (
            data
              .slice(slice_min, slice_max)
              .map((element, key) => (
                <PreviewProducts key={key} props={element} />
              ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <h1
        style={{ display: right }}
        className="text-white text-[5vw] font-bold"
      >
        {text}
      </h1>
    </div>
  );
}

export default Carousel;
