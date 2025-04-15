var header = window.document.getElementById('header')
var background1 = window.document.getElementById('background1')
var background2 = window.document.getElementById('background2')
var background3 = window.document.getElementById('background3')
var background4 = window.document.getElementById('background4')
var looptxt = window.document.getElementById('loop')
var financas = window.document.getElementById('finanças')
var shopping = window.document.getElementById('shopping')
var experiencias = window.document.getElementById('experiencias')
var vidaglobal = window.document.getElementById('vidaglobal')

function HeaderActive(){
    header.classList.add('bggray')
    header.classList.remove('bgnormal')
}

function HeaderOff(){
    header.classList.remove('bggray')
    header.classList.add('bgnormal')
}

financas.addEventListener('mouseover', function(){
    background1.style.display = 'inline-block'
    background2.style.display = 'none'
    background3.style.display = 'none'
    background4.style.display = 'none'
    HeaderActive()
})

function back1Open(){
    background1.style.display = 'inline-block'
}

background1.addEventListener('mouseleave', function(){
    background1.style.display = 'none'
    HeaderOff()
})

shopping.addEventListener('mouseover', function(){
    background1.style.display = 'none'
    background2.style.display = 'inline-block'
    background3.style.display = 'none'
    background4.style.display = 'none'
    HeaderActive()
})

background2.addEventListener('mouseleave', function(){
    background2.style.display = 'none'
    HeaderOff()
})

experiencias.addEventListener('mouseenter', function(){
    background1.style.display = 'none'
    background2.style.display = 'none'
    background3.style.display = 'inline-block'
    background4.style.display = 'none'
    HeaderActive()
})

background3.addEventListener('mouseleave', function(){
    background3.style.display = 'none'
    HeaderOff()
})

vidaglobal.addEventListener('mouseover', function(){
    background1.style.display = 'none'
    background2.style.display = 'none'
    background3.style.display = 'none'
    background4.style.display = 'inline-block'
    HeaderActive()
})

background4.addEventListener('mouseleave', function(){
    background4.style.display = 'none'
    HeaderOff()
})

looptxt.addEventListener('mouseenter', function(){
    shoppingclose()
    financasclose()
    experienciasclose()
    vidaglobalclose()
})