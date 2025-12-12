import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: "1", title: "Product 1" },
    { id: "2", title: "Product 2" },
    { id: "3", title: "Product 3" }
]

export const Products = () => {
    return (
        <>
            <h1>Products</h1>
            <ul>
                {PRODUCTS.map((prod) =>
                    <li key={prod.id}>
                        <Link to={`${prod.id}`}>{prod.title}</Link>
                    </li>
                )}
            </ul>
        </>) 
}