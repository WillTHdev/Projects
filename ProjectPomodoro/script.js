let studytime = 20 * 60
let breaktime = 5 * 60
let currentTime = studytime
let timer = null
let onBreak = false
let running = false

const PauseTxt = 'PAUSE'
const IniciarTxt = 'START'

const TimerDisplay = document.getElementById('Timerdisplay')
const Button = document.getElementById('buttonControls')
const ButtonReset = document.getElementById('buttonReset')
const ButtonSettings = document.getElementById('buttonSettings')
const Modal = document.getElementById('settingsModal')
const SaveButton = document.getElementById('ButtonSave')
const divCenter = document.getElementById('center')
const main = document.getElementById('main')
const header = document.getElementById('header')

divCenter.addEventListener('click', function(){
    main.classList.remove('mainhidden')
    main.sca-
    header.classList.remove('headerhidden')
    divCenter.remove()
})

function UptadeDisplay(){
    const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0')
    const seconds = (currentTime % 60).toString().padStart(2, '0')
    TimerDisplay.textContent = `${minutes}:${seconds}`
}

function StartTimer(){
    if (!running){
        running = true
        
        Button.innerHTML = IniciarTxt
        ButtonReset.classList.remove('hidden')

        timer = setInterval(function(){
            currentTime--
            UptadeDisplay()

            if (currentTime <= 0){
                clearInterval(timer)
                running = false
                onBreak = !onBreak
                alert(onBreak ? 'Break Time' : 'Back to study')
                currentTime = onBreak ? breaktime : studytime

                UptadeDisplay()
                StartTimer()
            }
        }, 1000)
    }else{
        clearInterval(timer)
        running = false
        Button.innerHTML = PauseTxt
    }
}

function ResetTimer(){
    clearInterval(timer)
    running = false
    currentTime = onBreak ? breaktime : studytime
    UptadeDisplay()
}

ButtonSettings.addEventListener('click', function(){
    Modal.classList.remove('chidden')
})

SaveButton.addEventListener('click', function(){
    const StudyVal = document.getElementById('StudyNumber').value
    const BreakVal = document.getElementById('BreakNumber').value

    if (StudyVal && BreakVal){
        studytime = parseInt(StudyVal) * 60
        breaktime = parseInt(BreakVal) * 60
        currentTime = onBreak ? breaktime : studytime
        UptadeDisplay()
        Modal.classList.add('chidden')
    }
})

Button.addEventListener('click', StartTimer)
ButtonReset.addEventListener('click', ResetTimer)

UptadeDisplay()