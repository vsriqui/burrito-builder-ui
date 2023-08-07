import { useState } from "react";
import { postOrders } from "../../apiCalls";


function OrderForm({addOrder, ...props}) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [submitComplete, setSubmitComplete] = useState(false)

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  function handleSubmit(event) {
    event.preventDefault()
    const newOrder = {
      
      name,
      ingredients

    }

    console.log(newOrder, 'what I want to post')
    if (newOrder.name && ingredients.length) {
    postOrders(newOrder)
    .then(aOrder => {
      addOrder(aOrder);
      clearInputs();
      setSubmitComplete(false)
    })
    .catch(err => alert(err)); 
  } else {
    setSubmitComplete(true)
    clearInputs();
  }
  
  }

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];

  const addIngredient = (e ,newIngredient) => {
    e.preventDefault()
    setIngredients([...ingredients, newIngredient]);
  };

  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => addIngredient(e ,e.target.name)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}
      {submitComplete && <h3>You need to complete your form!</h3>}
      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
