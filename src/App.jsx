import "./App.css";
import freshegg from "./assets/freshegg.jpg";

function App() {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-container">
          <img className="card-image" src={freshegg}></img>
        </div>
        <div className="card-content">
          <h1> Make a donation</h1>
          <h2>Do something amazing</h2>
          <div className="button-group">
            <button>Single</button>
            <button>Regular</button>
          </div>
          <div className="button-group">
            <button>£5</button>
            <button>£10</button>
            <button>£20</button>
            <button>£50</button>
          </div>
          <button>Donate</button>
        </div>
      </div>
    </>
  );
}

export default App;
