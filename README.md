# Explanation

This was our live final exam for Turing.edu, it involved making operational an incomplete/buggy react application. Connecting data flows with get and post requests to a concurrently local running and provided backend, and writing extensive cypress testing for the application with a time limit of three hours.

# Burrito Builder UI

Our company is building a prototype ticketing system for a local burrito shop. Unfortunately, the form dev on the project recently quit, leaving behind a broken app and little to no documentation. It's your job to save the project!

## Setup

- Fork this repo
- Clone down your forked repo and change into the cloned down directory
- Run `npm install` to install dependencies
- Run `npm start` to start your development server

Be sure to setup the [backend repo for Burrito Builder](https://github.com/turingschool-examples/burrito-builder-api) to be able to retrieve and save burrito orders.

## Iterations

### Iteration 1

Right now the app won't load because its unfinished/buggy. Run the dev server and fix whatever bugs/finish whatever functionality is causing the app to crash. 

### Iteration 2

Connect the front end to the backend so that when the app loads, all existing orders are fetched from the server.

### Iteration 3

Add functionality to enable form submission only when at least one ingredient and a name have been added to the order. If either of these two requirements is missing, the form should not be submittable. Upon successful submission, a POST request should be made to the server.

New orders should only be displayed on the page IF the POST request is successful. The user should see the new order displayed without the page refreshing. The new order should persist on the DOM after refreshing as well.

### Iteration 4

Cypress testing: Be sure to stub all network requests:  

- Write a test covering what should be displayed when the user first visits the page.
- Write a test to check the user flow of adding a new order to the DOM.
- Write a test to check that orders cannot be submitted without a name and at least one ingredient.


## Extensions (only to be attempted if all prior iterations are complete)

- Add delete functionality for an order (the server-side endpoint exists already) so that when the order is ready it can be removed from the ticketing system.
- Test the deleting functionality.
- Right now, an order can contain duplicates of ingredients. Bring some logic into the form so that an order can contain only two of the same ingredient.
- Add a total cost for the order. Add prices to each ingredient and total each order based on the ingredient cost. Display this for each order. The backend should be able to handle any extra data beyond `name` and `ingredients`.
- Style the form - it's hideous, and the team is sad about it.
- Style the container so that orders are nice and tidy, especially when ingredient amounts vary between orders.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
