# Country Information API

Welcome to the Country Information API repository! This API provides detailed information about countries, including name, code, dial code, region, subregion, languages, and currency.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Filters](#filters)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Country Information API allows you to retrieve information about countries using various filters. This API is designed to be simple and easy to use, making it suitable for a wide range of applications.

## Installation

To get started with the Country Information API, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/country-information-api.git


   Navigate to the project directory:
cd country-information-api
Public code references from 3 repositories
Install dependencies:
npm install
Public code references from 3 repositories
Start the server:
npm start
Public code references from 3 repositories
Usage
Once the server is running, you can access the API at http://localhost:3000. The API provides endpoints to retrieve country information based on various filters.

Documentation
Check out the API documentation below to learn how to use this API.

Before we start
You can find the full list of countries using this link: SHOW ALL COUNTRIES

Available Filters
The following filters are available for querying the API:

Name: Filter by country name. Example: name=Canada
Code: Filter by country code. Example: code=CA
Dial Code: Filter by country dial code. Example: dial_code=1
Region: Filter by region. Example: region=Americas
Subregion: Filter by subregion. Example: subregion=North America
Languages: Filter by languages spoken. Example: languages=English
Currency: Filter by currency. Example: currency=United States Dollar
Multiple Usage
To get a list of countries in the Americas region that speak English, you can use the following query:

http://localhost:3000/countries?region=Americas&languages=English
Public code references from 3 repositories
To get a list of countries in the Americas region that have the subregion North America, you can use the following query:

http://localhost:3000/countries?region=Americas&subregion=North America
Public code references from 3 repositories
Filters
The filters available for querying the API are dynamically generated from the JavaScript code. See below for a detailed list of filters and examples:

HTML
<section class="mb-8" id="docs">
  <h2 class="text-2xl font-bold mb-2">Documentation</h2>
  <p class="text-lg mb-4">Check out the API documentation below to learn how to use this API.</p>
  <div class="bg-gray-100 p-6 rounded-lg shadow-inner">
    <h3 class="text-xl font-semibold mb-2">Before we start. You can find all countries list using this link: <a target="_blank" href="/countries" class="text-cyan-600 hover:text-cyan-800">SHOW ALL COUNTRIES</a></h3>
    <h3 class="text-xl font-semibold mb-2">Available Filters</h3>
    <ul id="filters-list" class="list-disc list-inside"></ul>
    <h3 class="text-xl font-semibold mt-4 mb-2">Multiple Usage</h3>
    <p class="text-lg">To get a list of countries in the Americas region that speak English, you can use the following query:</p>
    <code class="block bg-gray-200 p-2 rounded mt-2"><span class="domain-placeholder"></span>/countries?region=Americas&languages=English</code><br>
    
    <p class="text-lg">To get a list of countries in the Americas region that sub region is North America, you can use the following query:</p>
    <code class="block bg-gray-200 p-2 rounded mt-2"><span class="domain-placeholder"></span>/countries?region=Americas&subregion=North America</code>
  </div>
</section>
Public code references from 3 repositories
JavaScript Code
The JavaScript code dynamically generates the filter list:

JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const domain = window.location.origin;
  const filters = [
    { name: 'Name', example: 'name=Canada' },
    { name: 'Code', example: 'code=CA' },
    { name: 'Dial Code', example: 'dial_code=1' },
    { name: 'Region', example: 'region=Americas' },
    { name: 'Subregion', example: 'subregion=North America' },
    { name: 'Languages', example: 'languages=English' },
    { name: 'Currency', example: 'currency=United States Dollar' }
  ];

  const ul = document.getElementById('filters-list');
  filters.forEach(filter => {
    const li = document.createElement('li')
    li.classList.add('my-8')
    li.classList.add('block')
    li.innerHTML = `<strong>
                      ${filter.name}:
                    </strong> 
                    Filter by country ${filter.name.toLowerCase()}. </br>
                    Example: 
                    <code>
                      ${domain}/countries?${filter.example}
                    </code>`;
    ul.appendChild(li);
  });
});
Public code references from 3 repositories
Contributing
We welcome contributions to improve the Country Information API. If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin my-feature-branch.
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
