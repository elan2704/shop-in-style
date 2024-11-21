import React from "react";
import "./App.css";

const products = [
  {
    category: "Casual Shoes",
    items: [
      { name: "Casual Sneakers", price: 2000, size: "6-11", image: "https://images.jdmagicbox.com/quickquotes/images_main/casual-shoes-black-2215968291-gf73tdtt.jpg", rating: 4 },
      { name: "Slip-on Loafers", price: 1800, size: "6-11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5Gs625tkQvNMhLD3hs_I0uh0xPeICDLocw&s", rating: 3.5 },
      { name: "Canvas Shoes", price: 2500, size: "6-11", image: "https://m.media-amazon.com/images/I/51Q+ft7BzpL._AC_SY580_.jpg", rating: 5 },
    ],
  },
  {
    category: "Formal Shoes",
    items: [
      { name: "Oxford Leather", price: 4000, size: "6-11", image: "https://attitudist.com/cdn/shop/files/Attitudist-Handcrafted-Oxford-Brown-Plain-Formal-Laceup-Derby-Shoes-With-Cap-Toe-For-Men-MTOBSF-1694598411467.jpg?v=1721125673&width=2000", rating: 4.5 },
      { name: "Derby Shoes", price: 3500, size: "6-11", image: "https://m.media-amazon.com/images/I/81kRXL6dO-L._SY695_.jpg", rating: 4 },
      { name: "Monk Strap", price: 4200, size: "6-11", image: "https://m.media-amazon.com/images/I/61Yx5VDeZBS._SY695_.jpg", rating: 3.5 },
    ],
  },
  {
    category: "Sports Shoes",
    items: [
      { name: "Running Shoes", price: 3000, size: "6-11", image: "https://m.media-amazon.com/images/I/71h3sDDePtL._SY695_.jpg", rating: 4 },
      { name: "Training Shoes", price: 3500, size: "6-11", image: "https://m.media-amazon.com/images/I/51wHBa7bP4L._SY695_.jpg", rating: 4.5 },
      { name: "Football Boots", price: 4500, size: "6-11", image: "https://m.media-amazon.com/images/I/71k6ty0jgnL._SY695_.jpg", rating: 5 },
    ],
  },
  {
    category: "Chappals & Clogs",
    items: [
      { name: "Flip Flops", price: 800, size: "6-11", image: "https://m.media-amazon.com/images/I/51E225yUR0L._SY695_.jpg", rating: 3 },
      { name: "Comfort Sandals", price: 1200, size: "6-11", image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000022009725_437Wx649H_202404212210261.jpeg", rating: 4 },
      { name: "Clogs", price: 1500, size: "6-11", image: "https://images-static.nykaa.com/media/catalog/product/2/0/205563cSLD4737022DGREY_1.jpg", rating: 3.5 },
    ],
  },
  {
    category: "Accessories",
    items: [
      { name: "Shoe Polish", price: 300, image: "https://heliosindia.com/cdn/shop/files/2_88b35b51-b262-4b6b-9c34-3bde889a841d.jpg?v=1705406761&width=2160", rating: 4 },
      { name: "Shoe Insoles", price: 800, image: "https://www.idealancy.pk/images/product_gallery/1679051686_shoe_form_1.jpg", rating: 4.5 },
      { name: "Laces Pack", price: 200, image: "https://m.media-amazon.com/images/I/615n3u8f6QL._SY575_.jpg", rating: 5 },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="store-name">SNEAK CHIC </h1>
        <p>No.10, KK Nagar, Chennai - 600004</p>
      </header>

      <main className="main-content">
        {products.map((category, index) => (
          <section key={index} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="product-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="product-card">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-price">Price: ₹{item.price}</p>
                  <p className="product-size">Size: {item.size || "N/A"}</p>
                  <p className="product-rating">Rating: {item.rating} ⭐</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <h3>Payment Methods</h3>
        <div className="payment-images">
          <img src="data:image/png;base64,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" alt="GPay" />
          <img src="data:image/png;base64,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" alt="Netbanking" />
          <img src="data:image/jpeg;base64,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" alt="Credit/Debit Cards" />
          <img src="data:image/png;base64,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" alt="Cash on Delivery" />
        </div>
      </footer>
    </div>
  );
};

export default App;