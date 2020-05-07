const counter = document.getElementById('counter')
let count = 0

const increase = () => counter.innerText = ++count

const decrease = () => counter.innerText = --count

const reset = () => {
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

function selectTheme(theme) {
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme
    const buttons = document.getElementsByTagName('button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}