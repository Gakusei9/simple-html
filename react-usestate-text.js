function NameDisplay() {
  
  const [name, setName] = React.useState("");
  const [city, SetCity] = React.useState("");
  
  return (
    <div>
     
      <input
        onChange={function(event) { setName(event.target.value); }}
        placeholder="Type your name"
      />
      
<input
        onChange={function(event) { SetCity(event.target.value); }}
        placeholder="Type your city"
      />

      <h2>Hello {name}! From {city}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NameDisplay />);