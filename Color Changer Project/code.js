const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target.id);
    if (e.target.id === 'pink') {
        body.style.background = 'pink'
    };
if (e.target.id === 'aqua') {
    body.style.backgroundColor = 'aqua'
}
    if (e.target.id === 'red') {
        body.style.background = 'red'
    };
if (e.target.id === 'yellow') {
    body.style.backgroundColor = 'yellow'
}
});
});

