import React from "react";

const ProductInCar = ({ product, count, setCount }) => {

  const handleCountChange = (newCount) => {
    setCount((prevCounts) => {
      const prevcount = prevCounts.filter((c) => c.id === product.id);
      if (prevcount.length === 0) {
        return [...prevCounts, { id: product.id, quantity: newCount }];
      } else {
        return prevCounts.map((c) =>
          c.id === product.id ? { ...c, quantity: newCount } : c,
        );
      }
    });
  }

  return (
    <div className="text-white min-h-[100px] mx-4 relative bg-gray-400 rounded-2xl pr-4 flex gap-4">
      <div className="max-w-[80px]">
        <img
          src={product.image}
          alt={product.name}
          className="object-fill w-full h-full rounded-lg"
        />
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex text-center items-center min-w-[60%]">
          <h4>{product.name}</h4>
        </div>
        <div className="flex flex-col items-center justify-end pb-2 gap-2">
          <p>${product.price.toFixed(2)}</p>
          <div className="bg-white rounded-sm h-6 text-black flex items-center gap-2 px-2">
            <span
              onClick={() => handleCountChange(count == 1 ? count : count - 1)}
              className="font-extrabold text-xl"
            >
              -
            </span>
            <span className="text-sm">{count}</span>
            <span
              onClick={() => handleCountChange(count + 1)}
              className="font-extrabold text-xl"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCar;
