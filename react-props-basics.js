function PlayerCard(props) {
  return (
  <div>
      <h2>{props.name}</h2>
      <p>Club: {props.club}</p>
      <p>Goals: {props.goal}</p>
  </div>
      );
}

function App() {
  return (
  <div>
      <PlayerCard name="Mbappe" club="Real Madrid" goal="45" />
      <PlayerCard name="Zidane" club="Retired" goal="74" />
      <PlayerCard name="Ronaldo" club="Al Nassr" goal="73" />
     <PlayerCard name="Ronaldino" club="Retired" goal="93" />
      
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);