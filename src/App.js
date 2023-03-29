import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src="/Spenc.png" alt="DIY voice assistant" />
        <h1 className="red">Spencer</h1>{" "}
        <p>
          A DIY voice assistant that talks, lights up, and understands voice
          commands
        </p>
        <span className="red">
          <s>kn1,027.99</s>kn813.99
        </span>
        <p className="red">Limited 20% discount</p>
        <div>
          <button>Shop now</button>
          <p>AGES 11+</p>
        </div>
      </div>
      <div>
      <img src="/Jay.png" alt="DIY voice assistant" />
        <h1>Spencer</h1>{" "}
        <p>
          A DIY voice assistant that talks, lights up, and understands voice
          commands
        </p>
        <span>
          <s>kn1,027.99</s>kn813.99
        </span>
        <p>Limited 20% discount</p>
        <div>
          <button>Shop now</button>
          <p>AGES 11+</p>
        </div>
      </div>
      <div>
      <img src="/Nibble.png" alt="DIY voice assistant" />
        <h1>Spencer</h1>{" "}
        <p>
          A DIY voice assistant that talks, lights up, and understands voice
          commands
        </p>
        <span>
          <s>kn1,027.99</s>kn813.99
        </span>
        <p>Limited 20% discount</p>
        <div>
          <button>Shop now</button>
          <p>AGES 11+</p>
        </div>
      </div>
    </div>
  );
}

export default App;
