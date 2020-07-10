import React from "react";
import classNames from "classnames";

//Классовый компонент
// Класс Button наследуется от библиотеки React, класса Component
//В классовом компоненте есть логика (mounted, )

/*
class Button extends React.Component {
  componentDidMount() {
    console.log("Компонент на своем месте");
  }
  render() {
    return (
      <button
        className={classNames(
          "button",
          {
            "button--outline": this.props.outline,
          } /*,
          {
            "button--filled": this.props.children,
          }
        )}
      >
        {this.props.children}
      </button>
    );
  }
}
*/

//Props - все передаваемые параметры (объект)
// {className, onClick, children, outline} - деструктуризация props. Вытаскивает и создает отдельные переменные с таким же именем

const Button = ({ className, onClick, children, outline }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

/*
function Button(props) {
  console.log(props);
  return (
    <button
      className={classNames("button", {
        "button--outline": props.outline,
      })}
    >
      {props.children}
    </button>
  );
}*/
export default Button;
