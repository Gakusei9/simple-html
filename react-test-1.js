function PlayCard(props) {
  return (
  <div>
      <h2>{props.name}</h2>
      <p>Club: {props.club}</p>
      <p>Goals: {props.goal}</p>
      </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
  <h2> Count: {count}</h2>
      <button onClick={function() {setCount(count + 1); }}> Plus 1 </button>
  </div>
  );
}

function Input() {
  const [name, setName] = React.useState("");
  return (
    <div>
      <input 
        onChange={function(event) {setName(event.target.value); }}
        placeholder="Type Here" />
      <h2> Hello {name}!</h2>
    </div>
  );
}

function TodoApp() {
  const [task, setTasks] = React.useState([ "Wake up", "Code" ]);
  return (
  <div>
      <h2>Tasks</h2>
      {task.map(function(task) {
        return <p>{task}</p>;
      })}
      <button onClick={function() {
          setTasks([...task, "New task"]);
        }}> Add Task </button>
      </div>
      );
}

function App() {
  return (
    <div>
  <PlayCard name="Ronaldo" club="Real Madrid" goal="54" /> 
      <Counter />
      <Input />
      <TodoApp />
    </div> );
}





const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(<App  />)