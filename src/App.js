import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Quizs from "./components/Quizs/Quizs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quiz/:id",
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quizs></Quizs>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/Statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics />,
        },
        {
          path: "*",
          element: <ErrorPage />,
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
