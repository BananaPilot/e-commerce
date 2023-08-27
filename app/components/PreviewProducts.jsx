"use client";

import React from "react";
import Link from "next/link";

function PreviewProducts({ props }) {
  return (
    <>
      <div className="border rounded-xl w-80 p-3 bg-white drop-shadow-2xl hover:-translate-y-1 duration-300 2xl:w-96">
        <Link href={`/productsPage/${props._id}`}>
          <img loading="lazy" draggable="false" src={props?.image} />
        </Link>
        <div className="flex justify-between mt-3">
          <h3 className="font-semibold text-base">{props?.title}</h3>
        </div>
        <div>
          <p>{props?.price} €</p>
        </div>
      </div>
    </>
  );
}

export default PreviewProducts;
