let questions = [
     {
      prompt: "Why so JavaScript and Java have similar name?\n(a) JavaScript is a stripped-down version of Java\n\ (b) JavaScript's syntax is loosely based on Java's\n(c) They both originated on the island of Java\n (d)None of the above ",
      answer: "b"
     },
     {
      prompt: "When a user views a page containing a JavaScript program, which machine actually executes the script?\n(a) The Users machine running a Web browser\n\ (b) The Web server\n(c) A central machine deep within Netscape s corporate offices\n (d)None of the above",
      answer: "a"
     },
     {
      prompt: "______ JavaScript is also called client-side JavaScript.\n(a) Microsoft\n\ (b) Navigator\n(c) LiveWire\n (d)Native ",
      answer: "b"
    },
     {
      prompt: "__________ JavaScript is also called server-side JavaScript.\n(a) Microsoft\n\ (b) Navigator\n(c) LiveWire\n (d)Native ",
      answer: "c"
     }
];
let score = 0;

function myQuiz() {
  for(let i = 0; i < questions.length; i++){
    let response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct!");
    } else {
      alert("WRONG!");
    }
  }
  alert("you got " + score + "/" + questions.length);
}
