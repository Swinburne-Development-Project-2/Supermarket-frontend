import React from "react";
import styles from "./ProductTable.module.css";
import Table from "react-bootstrap/Table"

const ProductTable = ({ data, role, addProductToCart }) => {
    const tableColumns = (
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
    );

    const addToCartAction = (productName) => (
      <a href="#" onClick={() => addProductToCart(productName)}>Add to cart</a>
    );

    const updateProductAction = () => (
      <a href="#">Update product</a>
    );

    const tableRows = (
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
            <td>{item.name}</td>
            <td>${item.price}.00</td>
            <td>
              {role === 'customer' ? addToCartAction(item.name) : updateProductAction}
            </td>
          </tr>
          );
        })}
      </tbody>
    );

    return (
      <div className={styles.supermarket}>
        <div className={styles.scroll}>
          <Table bordered hover>
            {tableColumns}
            {tableRows}
          </Table>
        </div>
      </div>
    );
};

export default ProductTable;
