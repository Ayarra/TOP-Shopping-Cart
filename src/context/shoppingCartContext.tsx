import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getProductQuantity: (id: string) => number;
  increaseProductQuantity: (id: string) => void;
  decreaseProductQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type CartItem = {
  id: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext );

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getProductQuantity(id: string) {
    return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  }

  function increaseProductQuantity(id: string) {
    setCartItems((prevData) => {
      if (!prevData.find((item) => item.id === id)) {
        return [...prevData, { id, quantity: 1 }];
      } else {
        return prevData.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          else return item;
        });
      }
    });
  }

  function decreaseProductQuantity(id: string) {
    setCartItems((prevData) => {
      if (prevData.find((item) => item.id === id)?.quantity === 1)
        return prevData.filter((item) => item.id !== id);
      else {
        return prevData.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getProductQuantity,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
