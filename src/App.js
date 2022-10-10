import "./App.css";
import { Navbar } from "flowbite-react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    // document.body.classList.add("dark:bg-slate-800");
  }, []);

  return (
    <div className="App">
      <Navbar fluid={true} rounded={true} className="duration-1000">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="duration-1000">
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
