import Dictionary from "./Dictionary";
import Footer from "./Footer";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Welcome to Susannes dictionary app</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <Footer />
      </footer>
      </div>
    </div>
  );
}