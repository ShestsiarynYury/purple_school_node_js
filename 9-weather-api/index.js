import express from 'express';
import { getForecast } from './weather.js';
// import http from 'http';

const port = 8000;
const app = express();

app.get('/weather', async (res, req) => {
    const data = await getForecast();
    res.send(data);
});

app.listen(port, host, () => {
    console.log(`Сервер запущен на ${host}:${port}`);
});

// const server = http.createServer((req, res) => {
//     switch (request.method) {
//         case 'GET':
//             switch (request.url) {
//                 case '/hello':
//                     response.statusCode = 200;
//                     response.end('Привет');
//                     break;
//                 // другие роуты...
//             }
//             break;
//         case 'POST':
//             // обработка POST...
//             break;
//         default:
//             break;
//     }
// });

// server.listen(port, host, () => {
//     console.log(`Сервер запущен на ${host}:${port}`);
// });