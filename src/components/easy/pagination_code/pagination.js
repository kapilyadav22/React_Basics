import React, { useEffect, useState } from "react";
import "./app.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const limit = 10;
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageNumberClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= total / limit && pageNumber != page)
      setPage(pageNumber);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          page * limit - limit
        }`
      );
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
        setTotal(data.total);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((item, index) => {
          return (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          );
        })}

      <div
        className="pagination"
      >
        {total > 0 && (
          <div>
            <span
              style={{
                cursor: "pointer",
                opacity: page < 2 ? "0" : "100",
              }}
              onClick={() => handlePageNumberClick(page - 1)}
            >
              Previous
            </span>
            {[...Array(Math.floor(total / limit))].map((_, index) => {
              return (
                <span
                  style={{
                    border: "5px",
                    cursor: "pointer",
                    border: "1px solid grey",
                    padding: "2px",
                    margin: "5px",
                    width: "50px",
                    backgroundColor: page - 1 === index ? "grey" : "white",
                  }}
                  onClick={() => handlePageNumberClick(index + 1)}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            })}
            <span
              onClick={() => handlePageNumberClick(page + 1)}
              style={{
                cursor: "pointer",
                opacity: page >= total / limit - 1 ? "0" : "100",
              }}
            >
              Next
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
