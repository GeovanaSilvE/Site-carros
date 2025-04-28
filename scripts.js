let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicador = document.querySelector('.indicadores')
let pontos = indicador.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

nextButton.onclick = () => {
    let itemOld = container.querySelector(".list .item.active")
    itemOld.classList.remove("active")

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add("active")

    let pontosOld = indicador.querySelector("ul li.active")
    pontosOld.classList.remove("active")
    pontos[active].classList.add("active")

    indicador.querySelector(".numeros").innerHTML = '0' + (active + 1)

}

prevButton.onclick = () => {
    let itemOld = container.querySelector(".list .item.active")
    itemOld.classList.remove("active")

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add("active")

    let pontosOld = indicador.querySelector("ul li.active")
    pontosOld.classList.remove("active")
    pontos[active].classList.add("active")

    indicador.querySelector(".numeros").innerHTML = '0' + (active + 1)

}