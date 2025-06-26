import React from 'react'
import "./Deal.css";
const products = [
  {
    id: 1,
    name: "Television",
    price: "₹50000/-",
    description: "A high-quality television with stunning visuals and sound.",
    image: "https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHZ8ZW58MHwyfDB8fHww",
  },
  {
    id: 2,
    name: "Speakers",
    price: "₹2500/-",
    description: "Compact and powerful speakers with excellent sound quality.",
    image: "https://images.unsplash.com/photo-1665672629999-0994c3f052a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnN8ZW58MHwyfDB8fHww",
  },
  {
    id: 3,
    name: "Computer",
    price: "₹30000/-",
    description: "A reliable computer for work, study, and entertainment.",
    image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHwyfDB8fHww",
  },
  {
    id: 4,
    name: "Bed",
    price: "₹15000/-",
    description: "A comfortable and stylish bed to enhance your bedroom.",
    image: "https://plus.unsplash.com/premium_photo-1671269705771-1ae9b3162118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkfGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Smartphone",
    price: "₹20000/-",
    description: "Feature-packed smartphone with excellent camera and battery.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfDJ8MHx8fDA",
  },
  {
    id: 6,
    name: "Headphones",
    price: "₹1500/-",
    description: "High-quality headphones with noise-cancellation features.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfDJ8MHx8fDA",
  },
  {
    id: 7,
    name: "Refrigerator",
    price: "₹25000/-",
    description: "Energy-efficient refrigerator with ample storage space.",
    image: "https://images.unsplash.com/photo-1723661973650-febc670fcea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWRnZXxlbnwwfDJ8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Washing Machine",
    price: "₹18000/-",
    description: "Top-load washing machine with advanced cleaning technology.",
    image: "https://images.unsplash.com/photo-1729073375325-99978ce4d052?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhc2hpbmclMjBtYWNoaW5lfGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Microwave",
    price: "₹8000/-",
    description: "Compact microwave oven with multiple cooking modes.",
    image: "https://m.media-amazon.com/images/I/71uGl3BjeVL._AC_UY327_FMwebp_QL65_.jpg",
  },
   {
    id: 10,
    name: "Bag",
    price: "₹1000/-",
    description: "Comfortable and best deal   waterproof bag skily fabric.",
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8MnwwfHx8MA%3D%3D",
  },
];
const Deal = () => {
  return (
    <div className="deal-container">
        <h1>TOP10 Deal</h1>
      {products.map((product) => (
        <div key={product.id} className="deal-id">
          <img
            src={product.image}
            alt={product.name}
            className="deal-image"
          />
          <h3 className="deal-name">{product.name}</h3>
          <p className="deal-description">{product.description}</p>
          <p className="deal-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Deal;
