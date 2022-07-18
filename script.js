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

    // console.log(anwser);

    //Register the anwser
    typeof anwser == "number" &&
      anwser < this.anwsers.length &&
      this.anwsers[anwser]++;
    this.displayResults();
    this.displayResults("string");

    // console.log(this.anwsers);
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.anwsers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.anwsers.join(", ")}`);
    }
  },
};

// poll.registerNewAnwser();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnwser.bind(poll));

poll.displayResults.call({ anwsers: [5, 2, 3] }, "string");
poll.displayResults.call({ anwsers: [1, 5, 3, 9, 6, 1] }, "string");
