import React from "react";

function Hero() {
  return (
    <div className="dark:bg-gray-900 border-b border-b-gray-700">
      <section className="bg-white dark:bg-gray-900 container">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to QuizBudd!!<br></br>
              Find your quiz
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Here you will find quiz on various topic. You can take them, see
              the right ansers and can judge yourself based on correct answer.
              We will highly recommend you to take this test.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5 lg:flex max-w-[50%] mx-auto lg:max-w-full">
            <img src="assets/hero.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
