import React from 'react';

const todoList = [
  {
    id: 0,
    title: 'Complete assignment',
  },
  {
    id: 1,
    title: 'Appointment',
  },
  {
    id: 2,
    title: 'Do workout',
  },
];

function App() {
  return (
    <div>
      <header>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      </header>
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })
      }

    </div>
  );
}

export default App;
