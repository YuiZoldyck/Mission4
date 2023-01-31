//function to calculate the grade

$("#btnCalc").click(function () {

    //take in all the variables/scores

    var assignmentgrade = $("#assignments").val();
    var groupgrade = $("#groupProject").val();
    var quizgrade = $("#quizzes").val();
    var midgrade = $("#midterm").val();
    var fingrade = $("#final").val();
    var intexgrade = $("#intex").val();

    //calclation to figure out what the grade average is

    finalgrade = assignmentgrade * .5 + groupgrade * .1 + quizgrade * .1 + midgrade * .1 + fingrade * .1 + intexgrade * .1;
    console.log(finalgrade);

    let gradeLetter = "";

    //switch statment that takes the final grade and finds the corresponding letter grade

    switch (true) {
        case finalgrade >= 94:
            gradeLetter = "A";
            break;
        case finalgrade >= 90:
            gradeLetter = "A-";
            break;
        case finalgrade >= 87:
            gradeLetter = "B+";
            break;
        case finalgrade >= 84:
            gradeLetter = "B";
            break;
        case finalgrade >= 80:
            gradeLetter = "B-";
            break;
        case finalgrade >= 77:
            gradeLetter = "C+";
            break;
        case finalgrade >= 74:
            gradeLetter = "C";
            break;
        case finalgrade >= 70:
            gradeLetter = "C-";
            break;
        case finalgrade >= 67:
            gradeLetter = "D+";
            break;
        case finalgrade >= 64:
            gradeLetter = "D";
            break;
        case finalgrade >= 60:
            gradeLetter = "D-";
            break;
        case finalgrade < 60:
            gradeLetter = "E";
            break;
    }

    //replaces input in input box with id letter with the gradeletter
    $("#letter").val(gradeLetter);
})