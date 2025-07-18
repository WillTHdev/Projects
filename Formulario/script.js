const SingUpPanel = document.getElementById('Div-Cadastro')
const SingUpTitle = document.getElementById('h1-Cadastro')
const SingUpButton = document.getElementById('Button-Hidden')
const MainElements = document.querySelectorAll('.Container > *:not(.Inputs-Cadastro, .ContainerRgt)')
const SingUpInputs = document.querySelector('.Inputs-Cadastro')
const ContainerCadastro = document.querySelector('.ContainerRgt')

const ContainerP = document.querySelector('.Container')
const LoginIcons = ContainerP.querySelector('.Login-Icons')

let isSingUpOpen = false

function Button(escala, esqueda, cima, opacidade) {
    SingUpButton.style.scale = escala
    SingUpButton.style.left = esqueda
    SingUpButton.style.top = cima
    SingUpButton.style.opacity = opacidade
}

SingUpPanel.addEventListener('mouseover', function () {
    SingUpTitle.style.transform = "translate(-8%, 20px)"
    Button('1', '50%', '75%', '1')
})

SingUpPanel.addEventListener('mouseleave', function () {
    SingUpTitle.style.transform = "translate(-8%, 50px)"
    Button('.5', '40%', '80%', '0')
})

SingUpButton.addEventListener('click', function () {
    if (!isSingUpOpen) {
        isSingUpOpen = !isSingUpOpen
        MainElements.forEach(item => {
            item.style.transition = '.5s'
            item.style.opacity = '0'
        })
        SingUpInputs.style.width = '50%'
        SingUpInputs.style.left = '25%'
        SingUpInputs.style.borderRadius = '20px 100px 100px 20px';

        ContainerCadastro.style.pointerEvents = 'all';
        ContainerCadastro.style.opacity = '1'
        ContainerCadastro.style.transition = '1s'
        ContainerCadastro.style.transform = 'translate(-65%, -65%) scale(1.2)'

        SingUpTitle.innerHTML = 'Hey bro, do you already have an account?'
        SingUpButton.innerHTML = 'Sing In'
    }else{
        isSingUpOpen = !isSingUpOpen

        MainElements.forEach(item => {
            item.style.transition = '.5s'
            item.style.opacity = '1'
        })

        SingUpInputs.style.width = '50%'
        SingUpInputs.style.left = '75%'
        SingUpInputs.style.borderRadius = '100px 20px 20px 100px';

        LoginIcons.style.display = 'flex'

        ContainerCadastro.style.pointerEvents = 'none';
        ContainerCadastro.style.opacity = '0'
        ContainerCadastro.style.transition = '.7s'
        ContainerCadastro.style.transform = 'translate(-65%, -65%) scale(1)'

        SingUpTitle.innerHTML = 'Hey bro, don t you have an account?'
        SingUpButton.innerHTML = 'Sing Up'
    }

})