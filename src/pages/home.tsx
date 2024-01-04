import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {
    console.log("add to cart");
  };
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findMore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="kdjfk"
          name="macbook"
          price={23}
          stock={323}
          handler={addToCartHandler}
          photo="https://i.ibb.co/ncT3k4X/format-arw-PXj-Qa-Gxi4-JA-unsplash.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
