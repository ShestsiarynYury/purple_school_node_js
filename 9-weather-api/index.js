import express from 'express';
import { getForecast, getForecastByCity } from './weather.js';

const port = 8000;
const app = express();

app.get('/weather', async (req, res) => {
    const data = await getForecast();
    res.send(data);
});

app.get('/weather/byCity/:city', async (req, res, next) => {
    try {
        // Деструктуризируем city из параметров запроса req.params
        const { city } = req.params; 
        
        const data = await getForecastByCity(city);
        res.send(data);
    } catch (error) {
        // Передаем ошибку в стандартный обработчик Express
        next(error); 
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на ${port}`);
});

