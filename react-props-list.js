let players = [
  {name: "Dembele", club: "PSG", goal: 35},
  {name: "Mbappe", club: "Real Madrid", goal: 75},
  {name: "Messi", club: "FC Miami", goal: 76}
];

function PlayerCard(props) {
  return (
  <div>
      <h1>{props.name}</h1>
      <p>{props.club} - {props.goal} goals</p>
  </div>
  );
}

function App() {
  return (
    <div>
  {players.map(function(player) {
    return (
    <PlayerCard
      name={player.name}
      club={player.club}
      goals={player.goal} /> );
  })}
</div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);