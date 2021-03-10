import { getPizzas } from "../../api";

//Асинхронный action
export const fetchPizzas = () => (dispatch) => {
    //Функция вызывает другую функцию
    getPizzas().then(({ data }) => {
        dispatch(setPizzas(data)); //Записываем полученные данные в хранилище
    });
};

export const setPizzas = (items) => ({ type: "SET_PIZZAS", payload: items });
