import { useState } from "react";
import type { HomeProps } from "./types";
import { useHome } from "./hook";

export function Home({ incrementCountCart }: HomeProps) {
  const [countHome, setCountHome] = useState(0);
  const { imageUrl, loading } = useHome(); 
  const Loading = () => {
    return (
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    );
  };

  const Image = () => {
    return (
      <img
        src={imageUrl}
        alt="Imagem aleatória"
        className="w-60 h-60 object-cover"
      />
    );
  };

  const CardProduct = () => {
    return (
      <div className="flex flex-col items-center gap-4">
        {loading ? <Loading /> : <Image />}
        <button
          className="bg-blue-500 rounded-sm p-2 text-amber-50 transition-transform transform active:scale-70 focus:outline-none"
          onClick={incrementCountCart}
        >
          Add no carrinho
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center p-10 gap-4">
        <CardProduct />
      </div>
      <div className="flex flex-col justify-center p-10 gap-4 items-center">
        <p>Contador home {countHome}</p>
        <button
          className="bg-blue-500 rounded-sm p-2 text-amber-50 transition-transform transform active:scale-70 focus:outline-none"
          onClick={() => setCountHome(prevCount => prevCount + 1)}
        >
          Home Contador
        </button>
      </div>
    </>
  );
}