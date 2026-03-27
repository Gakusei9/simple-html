function Header() {
  return <h1> My app </h1>;
}

function Description() {
  return <p>Built with React.</p>;
}

function Footer() {
  return <footer>
    <p>By me for me</p>
    </footer>;
}
function App() {
  return (
  <div>
      <Header />
      <Description />
      <Footer />
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);