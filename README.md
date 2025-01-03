# Country Information API

Welcome to the Country Information API repository! This API provides detailed information about countries, including name, code, dial code, region, subregion, languages, and currency.

## Table of Contents

- [Overview](#overview)
- [Usage](#how-to-use-it)
- [For HTML/JS](#for-htmljs)
- [For NEXT.JS/REACT.JS](#for-nextjs-reactjs)

## Overview

The Country Information API allows you to retrieve information about countries using various filters. This API is designed to be simple and easy to use, making it suitable for a wide range of applications.

## How to use it

To get started with the Country Information API, follow these steps:

### For HTML / JS

Using fetch function by JS :
```
    // Fetch data from the API
    fetch("https://country-data-api.onrender.com/countries")
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();//you'll receive all list of countries in JSON Format
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

```

### For NEXT.JS / REACT.JS :

You can using the previous function by JS. Or you can using library of fetching like Axios:

 - install axios :
   ```
      npm i axios
   ```
   or :
   ```
      yarn i axios 
   ```
   
 - After install it, you can use this example to fetch all countries list.
   ```
      const response = await axios.get("https://country-data-api.onrender.com/countries")
      console.log(response)
   ```
   <b>Remember, using axios request inside useEffect on next.js/react.js</b>


   ## Examples :

   - you can see this Article/Example to see how to use this API.
  
   If you have any question or you need to contact me. Please feel free to contact me from here : ramziadem.com/contact/
   
