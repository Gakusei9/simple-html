function Welcome() {
  return (
  <div> 
      <h1> Hello Younous </h1>
      <p> React is working. </p>
      <p> Here in Paris </p>
   </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Welcome />);