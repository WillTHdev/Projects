const button = document.getElementById("ButtonSingUp")
const buttonMobile = document.getElementById("SingUpMobile")
let DivLeft = document.getElementById('Divisao_Left')
let DivRight = document.getElementById('Divisao_Right')
let DivSingUp = document.getElementById('Divisao_Right_to_SingUp')

let Choose = false
let Clicker = true

button.addEventListener('click', function(){
    if(!Choose && Clicker){
        Clicker = false
        DivLeft.classList.toggle('Animation-Hidden-DivLeft')
        DivLeft.classList.remove('Animation-Show-DivLeft')

        DivRight.classList.toggle('AnimRightToLeft')
        DivRight.classList.remove('AnimLeftToRight')

        DivSingUp.classList.remove('AnimHiddenSingup')

        DivSingUp.style.display = 'block'
        setTimeout(function(){
            Clicker = true
        }, 1000)
        
    }else if(Choose && Clicker){
        Clicker = false
        DivLeft.classList.toggle('Animation-Show-DivLeft')
        DivLeft.classList.remove('Animation-Hidden-DivLeft')
        
        DivRight.classList.toggle('AnimLeftToRight')
        DivRight.classList.remove('AnimRightToLeft')

        setTimeout(function(){
            Clicker = true
            DivSingUp.style.display = 'none'
        }, 1000)
    }
    Choose = !Choose
})

buttonMobile.addEventListener("click", function(){
    DivLeft.classList.toggle("Animation-Hidden-Mobile")
    DivLeft.addEventListener("animationend", function(){
        DivLeft.style.visibility = 'Hidden'
        DivSingUp.style.visibility = 'Visible'
    }, {once: true})
})