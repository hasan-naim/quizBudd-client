import React from "react";

function Blog() {
  return (
    <div className="container">
      <div className="max-w-[900px] mx-auto mt-8">
        <h1 className="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
          #1 What is the purpose of React Router?
        </h1>
        <p className="text-xl text-[#b5c8d6]">
          We use react-router to navigate different pages in our react app. We
          can render different components based on different routes in the URL.
          We can also fetch data for a specific route and pass them in the
          component then we can show them in the UI. By using react-router page
          won’t refresh when we go a different route every time.{" "}
        </p>
      </div>
      <div className="max-w-[900px] mx-auto mt-16">
        <h1 className="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
          #2 How does context API work?
        </h1>
        <p className="text-xl text-[#b5c8d6] mb-4">
          Context API provides a way to pass data in the component tree without
          passing any props at each level. This way we can avoid props drilling.
          And we can pass any data, any function to any child component I mean
          in any component in the tree. The data provided by context is global.
          Any component in the tree can get the data.
        </p>
        <p className="text-xl text-[#b5c8d6]">
          We can create a new context by using React.createContext and then we
          can wrap our component tree by using Context.Provider with value
          property. Then we can get the value anywhere in the component tree and
          use it.
        </p>
      </div>
      <div className="max-w-[900px] mx-auto mt-16 mb-24">
        <h1 className="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
          #3 Explain useRef hook.
        </h1>
        <p className="text-xl text-[#b5c8d6] mb-4">
          When we need to get a reference of a DOM element we use the useRef
          hook. To get a dom element and to manipulate it we need to get the
          element first, in react we can get this reference by using useRef
          hook. useRef returns an object. In the object, there will be a current
          property where the reference is stored. We can also use it as a
          variable like a state. But the difference is the component will not
          render when its value changes.
        </p>
      </div>
    </div>
  );
}

export default Blog;
