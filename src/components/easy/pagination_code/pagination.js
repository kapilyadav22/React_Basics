import { useEffect, useState } from "react";
import "./app.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const limit = 10;
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageNumberClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== page) {
      setPage(pageNumber);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
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
      {products.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}

      <div className="pagination">
        {total > 0 && (
          <div>
            <span
              style={{
                cursor: "pointer",
                opacity: page === 1 ? "0" : "100",
              }}
              onClick={() => handlePageNumberClick(page - 1)}
            >
              Previous
            </span>

    {/* {Array.from({ length: totalPages }, (_, index) => { */}
            {[...Array(totalPages)].fill('-').map((_, index) => {
              return (
                <span
                  style={{
                    border: "5px",
                    cursor: "pointer",
                    border: "1px solid grey",
                    padding: "2px",
                    margin: "5px",
                    width: "50px",
                    backgroundColor:
                      page === index + 1 ? "grey" : "white",
                  }}
                  onClick={() => handlePageNumberClick(index + 1)}
                  key={index + 1}
                >
                  {index + 1}
                </span>
              );
            })}

            <span
              onClick={() => handlePageNumberClick(page + 1)}
              style={{
                cursor: "pointer",
                opacity: page === totalPages ? "0" : "100",
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
