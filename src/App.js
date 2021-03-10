import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    //Передаем функцию, которая будет вызываться при первом рендере (замена componentDidMount)
    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </div>
    );
}

export default App;
/*
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }
  render() {}
}


*/
//Объединяет возвращаемый объект с просами App
//Вызывается каждый раз при изменении хранилища. Имя может быть любое
/* const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
}; 
const mapDispatchProps = {
  setPizzas,
}; */
//export default connect(mapStateToProps, mapDispatchProps)(App);
