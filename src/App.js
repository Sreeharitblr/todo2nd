import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Designepage from "./components/Designepage";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { addTodo, deleteTodo } from "./Redux/action";
import todoReducer from "./Redux/Reducer";

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(todoReducer(addTodo, deleteTodo));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Designepage /> 
      </Provider> 
    </div>
  );
}

export default App;
