import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city',
    language: 'language'
}

export const saveKeyValue = async (key: string, value: string) => {
    let data: Record<string, string> = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath, 'utf-8');
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key:string) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
};

export const isExist = async (path: string) => {
    try {
        await promises.stat(path);
        return true;
    } catch(error) {
        return false;
    }
}