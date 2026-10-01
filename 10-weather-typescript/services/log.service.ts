import chalk from 'chalk';
import dedent from "dedent";

export const printError = (error:any) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

export const printSuccess = (message: string) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров — вывод погоды
        -s [город] — установка города
        -h — вывод помощи
        -t [токен] — сохранение токена`
    );
};

export const printWeather = (response:any, icon:string) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${response.name}
        ${icon} ${response.weather[0].description}
        Температура: ${response.main.temp} (ощущается как ${response.main.feels_like})
        Влажность: ${response.main.humidity}%
        Скорость ветра: ${response.wind.speed}`
    );
}