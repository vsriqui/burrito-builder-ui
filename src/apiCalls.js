const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};









export {getOrders}