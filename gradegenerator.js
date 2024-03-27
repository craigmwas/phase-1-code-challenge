function gradeGenerator(mark) {
    if (mark >= 79) {
        return "A";
    } else if (mark >= 60 && mark < 79) {
        return "B";
    } else if (mark >= 50 && mark < 60) {
        return "C";
    } else if (mark >= 40 && mark < 50) {
        return "D";
    } else if (mark < 40) {
        return "E";
    }
}
const mark = prompt ("Enter the students marks(0-100):");  
if(mark >= 0 && mark <= 100) {const grade = gradeGenerator(mark);
    console.log(`The grade of the student is: ${grade}`);}
    else {
        console.log("Please enter a valid mark between 0 and 100");
    }
