import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Task 1'
  },
  {
    id: 2,
    title: 'Task 2'
  },
  {
    id: 3,
    title: 'Task 3'
  }
]

function App() {
  return (
    <div> 
      <h1> To Do List </h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>
            {item.title}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
