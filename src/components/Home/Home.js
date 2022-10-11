import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import QuizList from "../QuizList/QuizList";

function Home() {
  const { data } = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <QuizList data={data}></QuizList>
    </div>
  );
}

export default Home;
