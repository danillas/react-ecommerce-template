import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

import { Categories, SortPopup, PizzaBlock } from "../components";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items); //Вытаскиваем из хранилища

  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index)),
    []
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          //onClickItem={(index) => dispatch(setCategory(index)} //В данном случае так делать не стоит, тк при изменении списка пицц, произойдет лишний ре-рендер
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              /*name={obj.name} imageUrl={obj.imageUrl}*/ {...obj}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
