function Counter() { 
  const [ count, setCount] = React.useState(0);
  return (
  <div>
      <h2>Count: {count}</h2>
      <button onClick={function() {setCount(count + 1) }}>
        Add 1
      </button>
      
      <button onClick={function() { setCount(count - 1); }}>
        Minus 1
      </button>
      
      <button onClick={function() { setCount(count * 2); }}>
        Multiply by 2
      </button>
      
      <button onClick={function() { setCount(10);}}>
        Reset to 10
      </button>
      
      <button onClick={function() {setCount(0); }}>
        Reset
      </button>
      </div>
        );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);