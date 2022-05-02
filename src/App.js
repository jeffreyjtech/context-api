import logo from './logo.svg';
import { ThemeContext } from './context/theme';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* This is a special component which reads the value prop from the provider in /context/theme.js */}
          <ThemeContext.Consumer>
            {/* And with JSX magic you can write in a function with returns a component that does something with that data */}
            {/* The theme object is in-scope inside the .Consumer component */}
            {(theme) => (
              <p>{theme.mode}</p>
            )}
          </ThemeContext.Consumer>
        </a>
      </header>
    </div>
  );
}

export default App;
