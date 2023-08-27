"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Carousel from "./components/Carousel";

function page() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer sticky={{ start: 0.1, end: 0.3 }}>
          <img
            draggable="false"
            className="p-20 w-[1000px] block ml-auto mr-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Spring_%28e-commerce_platform%29_logo.svg"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          style={{
            backgroundImage:
              "url(https://freepngimg.com/thumb/city/163993-skyline-york-landscape-hd-image-free.png)",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer style={{ backgroundColor: "#231f20" }} offset={1}>
          <Carousel
            text_side={"left"}
            slice_min={0}
            slice_max={10}
            text={"TOP SELLERS"}
          ></Carousel>
        </ParallaxLayer>
        <ParallaxLayer style={{ backgroundColor: "#231f20" }} offset={2}>
          <Carousel
            text_side={"right"}
            slice_min={10}
            slice_max={20}
            text={"BEST REVIEWS"}
          ></Carousel>
        </ParallaxLayer>
        <ParallaxLayer style={{ backgroundColor: "#231f20" }} offset={3}>
          <Carousel
            text_side={"left"}
            slice_min={20}
            slice_max={30}
            text={"NEW PRODUCTS"}
          ></Carousel>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default page;
