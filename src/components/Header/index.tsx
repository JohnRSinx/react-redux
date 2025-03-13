import { useSelector } from 'react-redux';
import type { RootState } from '../../store';


export function Header() {
  const countCart = useSelector((state: RootState) => state.cart.countCart); 
  return (
    <div className="bg-zinc-950 rounded-xs w-full p-10 flex justify-between">
      <h1 className="text-amber-50 text-2xl">Compras Starcatcher</h1>
      <p className="text-zinc-100 text-xl bg-blue-600 rounded-sm p-2">
        Carrinho + {countCart}
      </p>
    </div>
  );
}