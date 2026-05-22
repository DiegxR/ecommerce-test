import React from "react";

const Cart = ({ product, setCarProducts }) => {
  const { name, price, image } = product;
  return (
    <div className="relative w-[300px] h-[350px]">
      <img
        src={image}
        alt={name}
        className="w-full min-h-[250px] max-h-[250px] object-cover rounded-t-2xl"
      />

      <div className="bg-black flex items-center justify-between px-6 rounded-b-2xl font-bold text-white p-4">
        <div>
          <h3>{name}</h3>
          <p>${price}</p>
          <span onClick={() => setCarProducts(product.id)} className="absolute cursor-pointer right-2 text-2xl bottom-8">🛒</span>
        </div>
      </div>
        <span className="absolute cursor-pointer right-3 top-3">🤍</span>
    </div>
  );
};

export default Cart;
