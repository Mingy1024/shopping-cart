import { useReducer } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Product';
import Cart from './components/Cart';
import { CartContext } from './store';

function App() {
  const cartReducer = useReducer(
    (state, action) => {
      const cartList = [...state.cartList];
      // 先取得購物車目標品項的索引
      const index = cartList.findIndex((item) => item.id === action.payload.id);
      console.log(index);
      console.log(state, action);
      switch (action.type) {
        case 'ADD_TO_CART':
          if (index === -1) {
            // 還未加入購物車內
            cartList.push(action.payload);
          }else {
            // 當前購物車的項目與加入的項目一致
            cartList[index].quantity += action.payload.quantity;
          }
          return {
            ...state,
            cartList,
          };

        default:
          return state;
      }
    },
    {
      cartList: [],
    }
  );

  return (
    <CartContext.Provider value={cartReducer}>
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Products></Products>
          </div>
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
