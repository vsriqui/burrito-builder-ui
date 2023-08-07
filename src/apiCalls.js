const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};


function postOrders(newOrder) {
  return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
    .then(response => {
      console.log(response.body)
      if (response.ok) {
        return response;
      } else {
        throw new Error('We are  having technical  difficulties')
      }
    })
    .then(response => response.json());
}






export {getOrders, postOrders}