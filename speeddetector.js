function speedDetector(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints= Math.floor((speed - speedLimit) / 5);
        console.log("Points: " + demeritPoints);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
const userInput = prompt("Enter the speed of the car in km/h:");
const speed = parseFloat("userInput");

if(isNaN(speed)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    speedDetector(speed);
}
