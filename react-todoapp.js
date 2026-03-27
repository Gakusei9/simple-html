function TodoApp() {
  const [task, setTask] = React.useState(["Wake up", "Code"]);
  
  const [inputValue, setInputValue] = React.useState("");
  
  function addTask() {
    setTask([...task, inputValue]);
    setInputValue("");
    
  }
  
  function deleteTask(indexToDelete) {
    setTask(task.filter(function(task,index) {
      return index !== indexToDelete;
    }));
  }
  
  return (
  <div>
      <input 
        value={inputValue}
        onChange={function(event) {setInputValue(event.target.value);}}
        placeholder="New Task"/>
      <button onClick={addTask}>Add</button>
      
      {task.map(function(task, index) {
        return (
        <div key={index}>
            <span>{task}</span>
            <button onClick={function() {deleteTask(index);}}>
              Delete</button>
            </div>
        );
      })}
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);