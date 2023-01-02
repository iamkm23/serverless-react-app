import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:8888/api/products";

const Airtable = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section section-center">
      <div className="title">
        <h2>Airtable</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const { id, name, url, price } = product;
          return (
            <Link to={`/${id}`} className="product" key={id}>
            <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
