"use client"

import React, { useState, useEffect } from 'react'
import ProductsContainer from '../components/ProductsContainer'

function page() {

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
			{
				data.length > 0 ? (
					<div>
						{
							data.map(() => (
								<ProductsContainer props={data}/>
							))
						}
					</div>
				) : (
					<>
					</>
				)
			}
		</>
	)
}

export default page