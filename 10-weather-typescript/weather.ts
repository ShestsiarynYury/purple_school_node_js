#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';
import axios from "axios";

const saveToken = async (token: string) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен успешно.');
    } catch(error) {
        if (error instanceof Error) {
            printError(error.message);
        } else {
            printError('Произошла неизвестная ошибка');
        }
    }
}

const saveCity = async (city: string) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Город сохранен успешно.');
    } catch(error) {
        if (error instanceof Error) {
            printError(error.message);
        } else {
            printError('Произошла неизвестная ошибка');
        }
    }
}

const saveLanguage = async (language:string) => {
    if (!language.length) {
        printError('Не передан язык');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.language, language);
        printSuccess('Язык сохранен успешно.');
    } catch(error) {
        if (error instanceof Error) {
            printError(error.message);
        } else {
            printError('Произошла неизвестная ошибка');
        }
    }
}

const getForecast = async () => {
    try {
        const language = process.env.LANGUAGE ?? await getKeyValue(TOKEN_DICTIONARY.language);
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const cities = city.split(',');
        for (const c of cities) {
            const weather = await getWeather(c, language);
            printWeather(weather, getIcon(weather.weather[0].icon) ?? '');
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 404) {
                printError('Неверно указан город');
            } else if (error.response?.status === 401) {
                printError('Неверно указан токен');
            } else {
                printError(error.message);
            }
        } else if (error instanceof Error) {
            // Обработка обычных ошибок (например, TypeError при split)
            printError(error.message);
        } else {
            printError('Произошла неизвестная ошибка');
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }
    if (args.s) {
       return saveCity(args.s as string);
    }
    if (args.t) {
        return saveToken(args.t as string);
    }
    if (args.l) {
        return saveLanguage(args.l as string);
    }
    return getForecast();
};

initCLI();