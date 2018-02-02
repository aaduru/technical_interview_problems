let questions = [
     {
      prompt: "Why so JavaScript and Java have similar name?\n(a) JavaScript is a stripped-down version of Java\n\ (b) JavaScript's syntax is loosely based on Java's\n(c) They both originated on the island of Java\n (d)None of the above ",
      answer: "b"
     },
     {
          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
          answer: "c"
     },
     {
          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
          answer: "b"
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
