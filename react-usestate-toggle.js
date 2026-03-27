function ColorBox() {

  const [color, setColor] = React.useState("red");

  return (
    <div>
    
      <div style={{ background: color, width: "200px", height: "200px" }}>
      </div>

      <button onClick={function() { setColor("red"); }}>Red</button>
      <button onClick={function() { setColor("blue"); }}>Blue</button>
      <button onClick={function() { setColor("green"); }}>Green</button>
      <button onClick={function() { setColor("yellow"); }}>Yellow</button>
      <button onClick={function() { setColor("gray"); }}>Gray</button>
      <button onClick={() => setColor("#" + Math.floor(Math.random()*16777215).toString(16))}>
  Random color
</button>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorBox />);