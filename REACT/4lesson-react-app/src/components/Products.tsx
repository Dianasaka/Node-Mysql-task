import axios from "axios";
import { useEffect, useState } from "react";

export const Products = ({
    products,
    isLoading,
    fetchProducts,
    setProducts,
    filtered,
}: any) => {
    const [filterTitle, setFilterTitle] = useState("");

    const removeProducts = (id: number) => {
        axios
            .delete('https://golden-whispering-show.glitch.me/${id}')
            .then(() => fetchProducts())
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        if (filterTitle) {
            setProducts((prevProduct: any) =>
                prevProduct.filter((prevProduct: any) =>
                    prevProduct.title
                        .toLocaleLowerCase()
                        .includes(filterTitle.toLocaleLowerCase())
                )
            );
        } else {
            fetchProducts();
        }
    }, [filterTitle, setProducts]);

    return (
        <>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <div className="container">
                    {products &&
                        products.map((product: any, i: number) => (
                            <div key={`${product.id}- ${i}`} className="product-container">
                                <img src={product.image} alt={product.title} />
                                <p>{product.title}</p>
                                <h2>{product.price}</h2>
                                <button
                                    onClick={() => {
                                        removeProducts(product.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                </div>
            )}
            <label htmlFor="folter-title">Produkto paieska</label>
            <input
                onChange={(event) => setFilterTitle(event.target.value)}
                value={filterTitle}
                name="filter-title"
            />
        </>

    );
};
