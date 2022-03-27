import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: "m1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
    quantity: 1,
  },
  {
    id: "m2",
    title: "second test",
    price: 12,
    description: "This is a second product - amazing!",
    quantity: 1,
  },
  {
    id: "m3",
    title: "Third Test",
    price: 9,
    description: "This is a third product - amazing!",
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(prod => {
          return (
            <ProductItem
              key= {prod.id}
              prod= {prod}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
