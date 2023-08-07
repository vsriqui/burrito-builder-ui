const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};


function postOrders(newTrick) {
  return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('We are  having technical  difficulties')
      }
    })
    .then(response => response.json());
}






export {getOrders, postOrders}