import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    document.body.classList.add("dark:bg-slate-900");
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
