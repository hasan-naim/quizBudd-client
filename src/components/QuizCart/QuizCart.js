import React from "react";
import Parser from "html-react-parser";
import Option from "../Option/Option";
function QuizCart({ options, id, question, handleCliked }) {
  return (
    <div className="border border-gray-800 p-8 rounded-md text-slate-300">
      <h4 className="text-xl mb-4 font-medium text-slate-200">
        {Parser(question)}
      </h4>

      <ul className="grid gap-6 w-full md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {options.map((option, index) => {
          return (
            <Option
              handleCliked={handleCliked}
              id={id}
              index={index}
              option={option}
              key={id + index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default QuizCart;
