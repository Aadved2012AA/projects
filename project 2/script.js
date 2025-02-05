const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minutesdegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesdegrees}deg)`;

    const hours = now.getHours();
    const hoursdegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursdegrees}deg)`;

}

setInterval(setDate, 1000);

setDate();
