import { Header } from "./Header";
import { Navbar } from "./Navbar";
import "./styles.css";
import { useState } from "react";
import { SubSection } from "./SubSection";

export default function App() {
  const [items] = useState([
    {
      id: 1,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Fancy Product",
      product_price: "$40.00-$80.00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 2,
      sale_badge: "Sale",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Special Item",
      product_review: "::before",
      price_strike: "$20.00",
      product_price: "$18:00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 3,
      sale_badge: "Sale",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Sale Item",
      price_strike: "$50.00",
      product_price: "$25.00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 4,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Popular Item",
      product_review: "::before",
      product_price: "$40.00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 5,
      sale_badge: "Sale",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Sale Item",
      price_strike: "$50.00",
      product_price: "$25.00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 6,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Fancy Product",
      product_price: "$120.00-$280.00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 7,
      sale_badge: "Sale",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Special Item",
      product_review: "::before",
      price_strike: "$20.00",
      product_price: "$18:00",
      button_name: "Add to cart",
      addedToCart: false
    },
    {
      id: 8,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      product_name: "Popular Item",
      product_review: "::before",
      product_price: "$40.00",
      button_name: "Add to cart",
      addedToCart: false
    }
  ]);
  const [cart, setCart] = useState(0);

  function Child(data, name) {
    setCart(cart + data);
    items.map((item) => {
      if (name === item.id) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
  }

  return (
    <div className="App">
      <Header />
      <Navbar cartCount={cart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items.map((item, index) => (
              <SubSection key={index} value={item} parent={Child} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
