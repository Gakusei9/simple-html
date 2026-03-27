function ProfileBuilder() {
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [saved, setSave] = React.useState(false)
  
  return (
  <div> 
      <input
        value={name}
        onChange={function(event) { setName(event.target.value); }} 
        placeholder="Your name" />
      
      <input
        value={city}
        onChange={function(event) { setCity(event.target.value); }} 
        placeholder="Your city" />
      
      <button onClick={function() { setSave(true); }}>
        Save Profile 
      </button>
      {saved && (
      <div>
          <h2>{name}</h2>
          <p>{city}</p>
      </div>
      )}
      </div>
        
  );
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProfileBuilder />);