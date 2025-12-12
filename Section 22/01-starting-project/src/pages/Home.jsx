import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <>
            <h1>Welcome Home </h1>
            <p>Go to the <Link to='products'>list of products</Link></p>
        </>)

}