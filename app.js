const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')
const ampm   = document.getElementById('ampm')
const date   = document.getElementById('date')

paintTime()
setInterval(paintTime, 500)


function paintTime() {
    const now = new Date()
    paintHands(now)
    paintExtents(now)
}

function paintHands(now) {
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours   = now.getHours()

    secondsHand.style.transform = 'rotate(' + (seconds * 360/60) +'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * 360/60 + seconds/10) +'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 360/12 + minutes / 2) +'deg)'
}

function paintExtents(now) {
    date.innerText = now.getDate().toString()
    ampm.innerText = now.getHours() >= 12 ? "PM" : "AM"
}
