import React from "react";
import styles from "./Pricetable.module.css";
import Table from "react-bootstrap/Table"

const Pricetable = ({supermarket, data}) => {
    const logoURL = supermarket + ".png";

    const tableLogo = (
      <img 
        src={require(`./img/${logoURL}`)} 
        alt={supermarket} 
        className={supermarket === 'woolies' 
          ? styles.wooliesLogo 
          : styles.aldiLogo} />
    );

    const tableColumns = (
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
    );

    const tableRows = (
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
            <td>
              {item.img_url
              ? <a href={item.product_url} target="_blank">
                  <img 
                    src={item.img_url}
                    alt={item.product_name}
                    width="80px"
                    height="80px"
                  />
                </a>
              : <span>No image available</span>}
            </td>
            <td>{item.product_name}</td>
            <td>{item.price}</td>
          </tr>
          );
        })}
      </tbody>
    );

    return (
      <div className={styles.supermarket}>
        {tableLogo}
        <div className={styles.scroll}>
          <Table bordered hover>
            {tableColumns}
            {tableRows}
          </Table>
        </div>
      </div>
    );
};

export default Pricetable;
