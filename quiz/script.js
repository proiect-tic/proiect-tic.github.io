function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question0 = document.quiz.question0.value;

    var correct = 0;


    if (question1 == "Geralt of Rivia") {
        correct++;
    }
    if (question2 == "Blaviken") {
        correct++;
    }
    if (question3 == "O fata") {
        correct++;
    }
    if (question4 == "Roach") {
        correct++;
    }
    if (question5 == "Skellige") {
        correct++;
    }
    if (question6 == "Radovid V") {
        correct++;
    }
    if (question7 == "Novigrad") {
        correct++;
    }
    if (question8 == "Nilfgaard") {
        correct++;
    }
    if (question9 == "Alvin") {
        correct++;
    } 
    if (question0 == "Ciri") {
        correct++;
    }

    var messages = ["Cel mai talent", "Nu cel mai talent, dar ok", "Bruh"];
    var pictures = ["quiz/nice.jpg", "quiz/ok.png", "quiz/sociedad.png"];

    var range;

    if (correct < 7) {
        range = 2;
    }
    if (correct > 6 && correct < 10) {
        range = 1;
    }
    if (correct > 9 && correct < 11) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "Ai avut " + correct + " raspunsuri corecte.";
    document.getElementById("picture").src = pictures[range];

}