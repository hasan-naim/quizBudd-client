import React from "react";
import { useLoaderData } from "react-router-dom";
import Parser from "html-react-parser";
import QuizCart from "../QuizCart/QuizCart";
function Quizs() {
  const { data } = useLoaderData();
  const { name, questions } = data;
  console.log(data);

  return (
    <div className="container">
      <h1 className="my-3 mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
        {name}
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-y-8">
        {questions.map(({ question, options, id }, quesIndex) => {
          console.log("id", id);
          return (
            <QuizCart
              options={options}
              question={question}
              id={id}
              key={id}
            ></QuizCart>
          );
        })}
      </div>
    </div>
  );
}

export default Quizs;
