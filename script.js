"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust,", "3: C++"],
  anwsers: new Array(4).fill(0),

  registerNewAnwser() {
    //Get the anwser
    const anwser = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(anwser);

    //Register the anwser
    typeof anwser == "number" &&
      anwser < this.anwsers.length &&
      this.anwsers[anwser]++;

    console.log(this.anwsers);
  },
};

// poll.registerNewAnwser();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnwser.bind(poll));
