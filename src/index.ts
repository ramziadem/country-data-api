import express, { Request, Response } from 'express';
import { countries } from './countriesList'; // Ensure this path is correct
import path from 'path';

const app = express();
const port = 3000;

console.log('Current directory:', __dirname);

app.use(express.static(path.join(__dirname, '../src/public')));


app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/public', 'index.html'));
});

// Countries route with filtering
app.get('/countries', (req: Request, res: Response) => {
  const { name, code, dial_code, region, subregion, languages, currency } = req.query;

  let filteredCountries = countries;

  if (name) {
    filteredCountries = filteredCountries.filter(country =>
      country.name.toLowerCase().includes((name as string).toLowerCase())
    );
  }

  if (code) {
    filteredCountries = filteredCountries.filter(country =>
      country.code.toLowerCase() === (code as string).toLowerCase()
    );
  }

  if (dial_code) {
    filteredCountries = filteredCountries.filter(country =>
      country.dial_code === `+${dial_code}`
    );
  }

  if (region) {
    filteredCountries = filteredCountries.filter(country =>
      country.region.toLowerCase() === (region as string).toLowerCase()
    );
  }

  if (subregion) {
    filteredCountries = filteredCountries.filter(country =>
      country.subregion && country.subregion.toLowerCase() === (subregion as string).toLowerCase()
    );
  }

  if (languages) {
    filteredCountries = filteredCountries.filter(country =>
      country.languages.some(lang => lang.toLowerCase() === (languages as string).toLowerCase())
    );
  }

  if (currency) {
    filteredCountries = filteredCountries.filter(country =>
      country.currency.toLowerCase() === (currency as string).toLowerCase()
    );
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(filteredCountries, null, 2))
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
