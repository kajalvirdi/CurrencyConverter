# Currency Converter
This is a currency converter that allows you to convert one currency into multiple other currencies.

# Installation
To install it locally on system use the following command:
**npm install**

and then start the server with command
**npm start**


# Workflow

This project is created by using create-react-app. I have used following npm packages:

* Boostrap: design
* Axios: Http client(to call APIs)
* node-sass: for scss styling
First I have created the Currencyconverter Component and call it directly in App component. In Currencyconverter component calling Header component which is having Navbar in it.
After designing the layout, II have wrote function to call currency api and fill it in my select boxes.
After that I have created a onchange event handler to calculate the rates by using given api.

# Time Spent
**Day1.: Wednesday Evening**
Initail Setup: 15 mins.
Currencyconverter Component: 1.5 Hours
Header Component: 15 mins.
**Day2.: Thursday Evening**
README file updation: 10 mins.

# Bug-Time-Wastage: How resolve it?
It took me little bit time to understand the functionality for api to get the conversion rates, to understand the param symbol and base. Also, I was getting the CORS error while calling api, which I have resolved by specifing the "proxy" server in package.json.

# Improvements
We could extend the functionality by making it possible to change the source as well taget currency values. 
I could make a sperate utils for API calling with axios, not in component js file itself.
