let circle = document.getElementById('coloredCircle');
let circlePath = document.getElementById('circlePath')
let circleLength = circlePath.getTotalLength();

let gameRating = Number(document.getElementById('gameRating').innerHTML)


document.addEventListener("DOMContentLoaded", function () {
    circle.style.strokeDashoffset = circleLength - (circleLength * gameRating) / 10;
    circle.style.strokeDasharray = circleLength;
});

let gameTriggers = document.querySelectorAll('.game__link');
let gameContents = document.querySelectorAll('.game__info')

console.log(gameTriggers)
console.log(gameContents)

gameTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        console.log('click')
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.game__info[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('.game__link.active'),
            activeContent = document.querySelector('.game__info.active');

        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2

        activeContent.classList.remove('active'); // 3
        content.classList.add('active');
    });
})
