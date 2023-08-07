import React from "react";
import "./Orders.css";

const Orders = ({orders}) => {
  console.log(orders, 'deeeeeeestructrued')
  const orderEls = orders.map((order) => {
    return (
      <div className="order" key={order.name} id={order.name}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, index) => {
            return <li key={index} id={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
  );
};

export default Orders;
