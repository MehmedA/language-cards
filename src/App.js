import logo from "./assets/react.svg";
import { languages } from "./helper/Data";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="text-center p-4">
        <img src={logo} alt="" />
      </header>
      <div className="container">
        {languages.map((item, index) => (
          <Cards {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;