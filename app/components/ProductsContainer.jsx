import React, { useEffect, useState } from "react";
import PreviewProducts from "./PreviewProducts";

function ProductsContainer() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {data.length > 0 ? (
          <div className="mt-20 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 cursor-pointer ">
            {data.map((element, i) => (
              <PreviewProducts key={i} props={element} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
