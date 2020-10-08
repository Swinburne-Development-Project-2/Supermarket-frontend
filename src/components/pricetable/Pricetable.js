import React, { Component } from "react";
import styles from "./Pricetable.module.css";
import Table from "react-bootstrap/Table"

class Pricetable extends Component {
  render() {
    const logoURL = this.props.supermarket + ".png";
    return (
      <div className={styles.supermarket}>
        <img 
          src={require(`./img/${logoURL}`)} 
          alt={this.props.logo} 
          className={this.props.supermarket === 'woolies' 
            ? styles.wooliesLogo 
            : styles.aldiLogo} />
        <Table bordered hover>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Pricetable;
