import React, { useEffect, useState } from "react";
import ProductInCar from "./ProductInCar";
import { products } from "../utils/Products";

const Car = ({ setAside, aside, carProducts }) => {
  const [count, setCount] = useState([]);
  const [total, setTotal] = useState(0);

  const currentProducts = products.filter((product) =>
    carProducts.includes(product.id),
  );

  useEffect(() => {
    const newTotal = currentProducts.length > 0 && currentProducts.reduce((acc, product) => acc + product.price * (count.find((c) => c.id === product.id)?.quantity || 1), 0);
    setTotal(newTotal);
  }, [currentProducts, carProducts, setTotal, count]);

  return (
    <aside
      className={`z-10 fixed justify-between pb-12 text-white flex items-center flex-col right-0 top-0 w-[38vw] h-[100vh] bg-black transition-transform duration-300 ${aside ? "translate-x-0" : "translate-x-full"}`}
    >
      <span
        onClick={() => setAside(false)}
        className="absolute cursor-pointer left-4 font-extrabold text-white text-xl top-2"
      >
        ✕
      </span>
      <div>
        <h3 className="text-white text-center p-8 font-bold">Tus productos</h3>
        <div className="flex flex-col gap-8">
          {currentProducts.map((product) => (
            <ProductInCar
              product={product}
              count={count.find((c) => c.id === product.id)?.quantity || 1}
              setCount={setCount}
            />
          ))}
        </div>
      </div>
      <div>
        <span className="bg-gray-800 text-white p-4 rounded-lg font-bold">
          Total: ${total }
        </span>
      </div>
    </aside>
  );
};

export default Car;
