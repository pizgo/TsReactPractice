import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //tu się dzieje destrukturyzacja! use state zwraca tablicę z dwoma elementami(pierwszy to latest state snapshot, drugi to funkcja do update stan i rerender)  i tu od razu przypisujemy je do dwóch zmiennych
    //precyzujemy jaki dokładnie typ danych będzie przekazywany do useState

  const todoAddHandler = (text: string) => {
    setTodos()
  }
  return (
    <div className="App">
      <NewTodo todoAddHandler={todoAddHandler}/> //przekazuję pointer do funkcji jako props
      <TodoList items={todos} />
    </div>
  );
};

export default App;
