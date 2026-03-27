function CardPlayer() {
  let name = "Mbappe";
  let goal = 30;
  let club = "Real Madrid";
  let country = "Spain";
  
  return (
  <div>
      <h2>{name}</h2>
        <p>Club: {club}</p>
        <p>Goals: {goal}</p>
        <p>Country: {country}</p>
      
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardPlayer />);