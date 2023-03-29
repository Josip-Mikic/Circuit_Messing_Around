import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <div className="flex">
        <Card
          image="/Nibble.webp"
          age={25}
          headingText="Card Heading"
          name="John Doe"
          price={100}
          discount={10}
        ></Card>
        <Card
          image="/Nibble.webp"
          age={25}
          headingText="Card Heading"
          name="John Doe"
          price={100}
          discount={10}
        ></Card>
        <Card
          image="/Nibble.webp"
          age={25}
          headingText="Card Heading"
          name="John Doe"
          price={100}
          discount={10}
        ></Card>
      </div>
   
    </div>
  );
}

export default App;
