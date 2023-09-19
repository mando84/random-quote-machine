import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./randomQuoteMachine.js";

function App() {
  return (
    <div class="container">
      <div class="bg">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <div id="buttons" class="text-center">
            <a id="new-quote" class="btn btn-lg btn-success">
              New Quote
            </a>
            <a
              id="tweet-quote"
              class="btn btn-lg btn-primary"
              href="#"
              target="_blank"
            >
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
