import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "*",
          element: <div> This page is not found</div>,
        },
      ],
    },
  ]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    document.body.classList.add("dark:bg-slate-900");
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
