import cors from 'cors';
import express, { Request, Response } from 'express';
import { countries } from './countriesList'; // Ensure this path is correct
import path from 'path';

const app = express();
const port = 3333;

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Countries route with filtering
app.get('/countries', (req: Request, res: Response) => {
  console.log(req.query);
  try {
    const { name, code, dial_code, region, subregion, languages, currency } = req.query;

    let filteredCountries = countries;

    if (name) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.toLowerCase().includes((name as string).toLowerCase())
      );
    }

    if (code) {
      filteredCountries = filteredCountries.filter((country) =>
        country.code.toLowerCase() === (code as string).toLowerCase()
      );
    }

    if (dial_code) {
      filteredCountries = filteredCountries.filter((country) =>
        country.dial_code === `+${dial_code}`
      );
    }

    if (region) {
      filteredCountries = filteredCountries.filter((country) =>
        country.region.toLowerCase() === (region as string).toLowerCase()
      );
    }

    if (subregion) {
      filteredCountries = filteredCountries.filter(
        (country) =>
          country.subregion &&
          country.subregion.toLowerCase() === (subregion as string).toLowerCase()
      );
    }

    if (languages) {
      filteredCountries = filteredCountries.filter((country) =>
        country.languages.some(
          (lang) => lang.toLowerCase() === (languages as string).toLowerCase()
        )
      );
    }

    if (currency) {
      filteredCountries = filteredCountries.filter((country) =>
        country.currency.toLowerCase() === (currency as string).toLowerCase()
      );
    }

    res.setHeader('Content-Type', 'application/json');
    res.json(filteredCountries);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
