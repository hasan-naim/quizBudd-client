import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Correct from "../Correct/Correct";
import InCorrect from "../InCorrect/InCorrect";
import QuizCart from "../QuizCart/QuizCart";
function Quizs() {
  const [correct, setCorrect] = useState(0);
  const [inCorrect, setInCorrect] = useState(0);
  const [selected, setSelected] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const { data } = useLoaderData();
  const { name, questions } = data;
  useEffect(() => {
    const correctAnswer = questions.map((obj) => obj.correctAnswer);
    setCorrectAnswers([...correctAnswers, ...correctAnswer]);
    console.log(Object.values(selected));
  }, [questions, selected]);

  const handleCliked = async (text, key) => {
    const obj = {
      ...selected,
    };
    obj[key] = text;
    // if(selected.obj.)
    await setSelected({ ...obj });

    const isCorrect = correctAnswers.find((elem) => elem === text);
    const isSelected = Object.values(selected).includes(text);
    const correctInclude = correctAnswers.includes(selected[key]);
    if (isCorrect && isSelected !== true) {
      setCorrect((prev) => prev + 1);
      console.log(true);
    } else if (correctInclude === true && !isCorrect) {
      console.log("minus");
      setCorrect((prev) => prev - 1);
    } else {
      setInCorrect((prev) => prev + 1);
      console.log(false);
    }
  };

  return (
    <div className="container relative">
      <h1 className="my-3 mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
        {name}
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-y-8">
        {questions.map(({ question, options, id }, quesIndex) => {
          return (
            <QuizCart
              options={options}
              question={question}
              id={id}
              key={id}
              handleCliked={handleCliked}
            ></QuizCart>
          );
        })}
      </div>
      <Correct correct={correct}></Correct>
      <InCorrect inCorrect={inCorrect} />
    </div>
  );
}

export default Quizs;
