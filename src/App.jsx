import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const products = [
    {
      id: 1,
      name: 'MacBook Pro 14"',
      category: "Laptops",
      price: 1999.99,
      description:
        "Chip M3 Pro, 16GB RAM, 512GB SSD. La potencia personificada.",
      image:
        "https://mac-center.com/cdn/shop/files/MacBook_Pro_13_in_Space_Gray_PDP_Image_Position-1_MXLA_5395ce92-3d36-4483-a995-b6bb011179c0.jpg?v=1700304877&width=713",
      stock: 12,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      category: "Audio",
      price: 349.0,
      description:
        "Auriculares con cancelación de ruido líder en la industria y sonido premium.",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
      stock: 25,
    },
    {
      id: 3,
      name: "Mechanical Keyboard GMMK Pro",
      category: "Accesorios",
      price: 169.5,
      description:
        "Teclado mecánico custom con switches táctiles y retroiluminación RGB.",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
      stock: 8,
    },
    {
      id: 4,
      name: "iPhone 15 Pro",
      category: "Smartphones",
      price: 999.0,
      description:
        "Diseño de titanio, chip A17 Pro y el sistema de cámaras más avanzado.",
      image:
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
      stock: 15,
    },
    {
      id: 5,
      name: 'Monitor Gaming 27" 4K',
      category: "Monitores",
      price: 599.99,
      description:
        "Panel IPS con 144Hz de tasa de refresco y 1ms de respuesta.",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
      stock: 5,
    },
  ];
  
  const [aside, setAside] = useState(false)
  return (
    <>
      <nav className="flex justify-center relative bg-black py-4">
        <h1 className="text-white text-center ">Mi tiendita</h1>
        <span onClick={() => setAside(!aside)} className="absolute cursor-pointer right-4 text-2xl top-2">🛒</span>
      </nav>
      <aside className={`absolute z-10 right-0 top-0 w-[28vw] h-[100vh] bg-black transition-transform duration-300 ${aside ? 'translate-x-0' : 'translate-x-full'}`}>
        <span onClick={() => setAside(false)} className="absolute cursor-pointer left-4 font-extrabold text-white text-xl top-2">✕</span>
        <h3 className="text-white text-center p-8 font-bold">Tus productos</h3>
      </aside>
      <section className="p-10">
        <h3 className="font-bold text-3xl">Nuestros Productos</h3>

        <div className="mt-14 flex gap-20 flex-wrap">
          {products.map((product) => (
            <Cart name={product.name} price={product.price} image={product.image} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
