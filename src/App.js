import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";
function App() {
  const [mockData, setMockData] = useState([
    {
      image: "/Nibble.webp",
      age: 25,
      headingText:
        "A DIY voice assistant that talks, lights up, and understands voice commands",
      name: "Spencer",
      price: 1027.99,
      discount: 0.2,
    },
    {
      image: "/Jay.webp",
      age: 25,
      headingText: "Build & code your own DJ mixer",
      name: "Jay-D",
      price: 1027.99,
      discount: 0.15,
    },
    {
      image: "/Nibble.webp",
      age: 25,
      headingText: "Build & code your very own retro game console",
      name: "Nibble",
      price: 813.99,
      discount: 0.2,
    },
  ]);
  const handleAddData = () => {
    const newData = [
      {
        image: "/Nibble.webp",
        age: 25,
        headingText:
          "A DIY voice assistant that talks, lights up, and understands voice commands",
        name: "Spencer",
        price: 1027.99,
        discount: 0.2,
      },
      {
        image: "/Jay.webp",
        age: 25,
        headingText: "Build & code your own DJ mixer",
        name: "Jay-D",
        price: 1027.99,
        discount: 0.15,
      },
      {
        image: "/Nibble.webp",
        age: 25,
        headingText: "Build & code your very own retro game console",
        name: "Nibble",
        price: 813.99,
        discount: 0.2,
      },
    ];
    setMockData([...mockData, ...newData]);
  };
  return (
    <div className="App">
      <p className="title">
        Learn electonics & coding <br /> with our best-selling DIY STEM kits:
      </p>
      <div className="card-container">
        {mockData.map((item) => (
          <Card data={item}></Card>
        ))}
      
      </div>
      <div>
      <button className="loadButton" onClick={handleAddData}>Load More</button>

      </div>
    </div>
  );
}

export default App;
