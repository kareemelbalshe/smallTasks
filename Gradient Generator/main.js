let colorOne = document.getElementById('color-a')
let colorTwo = document.getElementById('color-b')
let currentDirection = 'to bottom'
let outputCode = document.getElementById('code')
let copied = document.querySelector('.copied')

function setDirection(value, _this) {
    let direction = document.querySelectorAll('.buttons button')
    for (let i of direction) {
        i.classList.remove('active')
    }
    _this.classList.add('active')
    currentDirection = value
}
function generareCode() {
    outputCode.value = `background-image:linear-gradient(${currentDirection},${colorOne.value},${colorTwo.value})`
    document.getElementsByTagName('BODY')[0].style.backgroundImage = `linear-gradient(${currentDirection},${colorOne.value},${colorTwo.value})`
}
function copyText() {
    if (outputCode.value!=="") {
        outputCode.select()
        document.execCommand('copy')
        copied.style.opacity = "0.7"
        setInterval(() => {
            copied.style.opacity = "0"
        }, 1500)
    }

}