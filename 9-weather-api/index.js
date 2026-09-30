import express from 'express';
import { getForecast } from './weather.js';

const port = 8000;
const app = express();

app.get('/weather', async (req, res) => {
    const data = await getForecast();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Сервер запущен на ${port}`);
});

