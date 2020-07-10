import React from "react";

//class Categories extends React.Component {
//Создаем состояние в классе
//   state = {
//     activeItem: null,
//   };

//   //Метод в классе. Меняем состояние при выборе пункта меню
//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     }); //Обновляем состояние - меняем конкретное его
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               key={`${name}_${index}`}
//               onClick={() => this.onSelectItem(index)}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
function Categories({ items, onClickItem }) {
  const [activeItem, setactiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setactiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
