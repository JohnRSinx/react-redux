import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export function App() {
  const [countCart, setCountCart]= useState(0)
  const incrementCountCart = () => {
    setCountCart(prevCount => prevCount + 1)
  }
  return (
    <>
      <Header countCart={countCart}/>
      <Home incrementCountCart={incrementCountCart}/>
    </>
  )
}

