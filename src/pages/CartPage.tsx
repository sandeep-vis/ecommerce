import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const total = state.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {state.items.map((item: any) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <h2>{item.title}</h2>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })} className="text-red-600">Remove</button>
        </div>
      ))}
      <h2 className="mt-4 font-bold">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}
