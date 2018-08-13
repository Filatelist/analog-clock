var secondHand = document.querySelector('.second-hand'),
    minsHand = document.querySelector('.min-hand'),
    hoursHand = document.querySelector('.hour-hand');
function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        mins = now.getMinutes(),
        hours = now.getHours(),
        secondDegree = 6 * now.getSeconds();
        minDegree = 6 * (now.getMinutes() + (1 / 60) * now.getSeconds()),
        hoursDegree = 30 * (now.getHours() + (1 / 60) * now.getMinutes()); 
    secondHand.style.transform = 'rotate(' + secondDegree + 'deg)';
    minsHand.style.transform = 'rotate(' + minDegree + 'deg)';
    hoursHand.style.transform = 'rotate(' + hoursDegree + 'deg)';
}
setInterval(setDate, 100);