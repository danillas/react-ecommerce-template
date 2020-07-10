/*import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Categories from "./Categories.jsx";

export { Button, Header, Categories };*/

//Импорт и экспорт в одну строчку. Экспортировать default из файла Button.jsx, как Button
export { default as Button } from "./Button.jsx";
export { default as Header } from "./Header.jsx";
export { default as Categories } from "./Categories.jsx";
export { default as SortPopup } from "./SortPopup.jsx";
export { default as PizzaBlock } from "./PizzaBlock.jsx";
