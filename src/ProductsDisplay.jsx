import useTitleId from "./hooks/useTitleId";
import "./ProductsDisplay.css";

export function ProductsDisplay({ sectionName, title, products }) {
  const titleId = useTitleId(title);
  return (
    <section className="products" id={sectionName} aria-labelledby={titleId}>
      <h2 className="products-title" id={titleId}>
        {title}
      </h2>
      <div className="products-display">
        {products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
              amountOfColors={product.amountOfColors}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
}

function Product({ title, price, amountOfColors = 0, image }) {
  const titleId = useTitleId(title);

  return (
    <article className="product" aria-labelledby={titleId}>
      <div className="product-description">
        <h3 className="product-title" id={titleId}>
          {title}
        </h3>
        <p className="product-price">${price}</p>
        {amountOfColors > 1 ? <p className="product-colors">{amountOfColors} colors</p> : ""}
      </div>
      <img className="product-image" src={image} alt={title} loading="lazy" />
    </article>
  );
}
