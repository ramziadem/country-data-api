"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const countriesList_1 = require("./countriesList"); // Ensure this path is correct
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Countries route with filtering
app.get('/countries', (req, res) => {
    const { name, code, dial_code, region, subregion, languages, currency } = req.query;
    let filteredCountries = countriesList_1.countries;
    if (name) {
        filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (code) {
        filteredCountries = filteredCountries.filter(country => country.code.toLowerCase() === code.toLowerCase());
    }
    if (dial_code) {
        filteredCountries = filteredCountries.filter(country => country.dial_code === `+${dial_code}`);
    }
    if (region) {
        filteredCountries = filteredCountries.filter(country => country.region.toLowerCase() === region.toLowerCase());
    }
    if (subregion) {
        filteredCountries = filteredCountries.filter(country => country.subregion && country.subregion.toLowerCase() === subregion.toLowerCase());
    }
    if (languages) {
        filteredCountries = filteredCountries.filter(country => country.languages.some(lang => lang.toLowerCase() === languages.toLowerCase()));
    }
    if (currency) {
        filteredCountries = filteredCountries.filter(country => country.currency.toLowerCase() === currency.toLowerCase());
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(filteredCountries, null, 2));
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
