import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";
import { exampleData } from "./mockData";
import Spinner from "./Components/Spinner";
function App() {
  const [mockData, setMockData] = useState([...exampleData]);
  const [isLoading, setIsLoading] = useState(false);
  const handleAddData = () => {
    setIsLoading(true)
    setTimeout(() => {
      // Simulate data fetching with a delay of 2 seconds

      setMockData([...mockData, ...exampleData]);
      setIsLoading(false)
    }, 2000);
  };

  // useEffect(() => {

  // }, []);

  return (
    <div className="App">
      {isLoading ? (<p>loading</p>) :(<p>not loading</p>) }
      <p className="title">
        Learn electonics & coding <br /> with our best-selling DIY STEM kits:
      </p>
      <div className="card-container">
        {mockData.map((item) => (
          <Card data={item}></Card>
        ))}
      </div>
      <div>
        <button className="loadButton" onClick={handleAddData}>
        {isLoading ? (<Spinner/>) :("Load data") }
        </button>
      </div>
    </div>
  );
}

export default App;
