import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { products } from "./utils/Products";
import ProductInCar from "./components/ProductInCar";
import Car from "./components/Car";

function App() {

  const [aside, setAside] = useState(false);
  const [carProducts, setCarProducts] = useState([]);

  useEffect(() => {
    console.log(carProducts)
  }, [carProducts])

  const handleCarProducts = (id) => {
    if(carProducts.includes(id)) {
      setCarProducts(carProducts.filter(product => product !== id))
    } else {
      setAside(true)
      setCarProducts([...carProducts, id])
    }
  }

  return (
    <div className="flex select-none overflow-x-hidden flex-col justify-center">
      <div className="fixed w-full z-10 top-0">
      <nav className=" justify-center relative bg-black py-4">
        <h1 className="text-white text-center ">Mi tiendita</h1>
        <span
          onClick={() => setAside(!aside)}
          className="absolute cursor-pointer right-4 text-2xl top-2"
        >
          🛒
        </span>
      </nav>
      </div>
      <Car carProducts={carProducts} setAside={setAside} aside={aside} />
      <section className="flex flex-col pt-20 p-10">
        <h3 className="font-bold text-center text-3xl">Nuestros Productos</h3>

        <div className="mt-14 flex justify-center gap-18 p-10 flex-wrap">
          {products.map((product) => (
            <Cart
              product={product}
              setCarProducts={handleCarProducts}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
