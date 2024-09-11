import "./App.css";
const prods = [
  { id: 1, name: "продукт1", cost: 100 },
  { id: 2, name: "продукт2", cost: 200 },
  { id: 3, name: "продукт3", cost: 300 }
];

function App() {
  const res = prods.map(item => (
    <li key={item.id}>
      {item.name}: {item.cost}
    </li>
  ));
  return <ul>{res}</ul>;
}

export default App;