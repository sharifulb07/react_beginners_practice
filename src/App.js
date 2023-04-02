import "./App.css";
import Todos from "./Todos";
import TodoList from "./components/TodoList";
import { Profile } from "./components/propsPass/PropsTransfer";

import PackagingList from "./components/packagingList/PackagingList";
import RenderList from "./components/renderList/RenderList";
import TeaCup from "./components/Guest/TeaCup";


function App() {
  return (
    <div className="App">
      <TodoList />
      <Profile />
      <PackagingList />
    <RenderList />

    <TeaCup />

    </div>
  );
}

export default App;
