import axios from "axios"; //Библиотека для более простой отправки запросов

export const getPizzas = () => {
    //Функция вызывает другую функцию
    return axios.get("http://localhost:3001/pizzas");
};
