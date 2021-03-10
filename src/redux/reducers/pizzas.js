const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === "SET_PIZZAS") {
    //Взять старые свойства из state (initialState), заменить items на новые значения
    return {
      ...state, //взять старые данные из стейта
      items: action.payload, // заменить айтемс
      isLoaded: true,
    }; // вернуть новый стейт
  }
  return state; //вернуть старый стейт
};

export default pizzas;
