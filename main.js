const $ = document.querySelector.bind(document)

const btn1 = $('.btn1')
const btn2 = $('.btn2')
const firstBody = $('.first-body')
const secondBody = $('.second-body')
const liXiBtn = $('.baoLiXi')
const video = $('video')

btn1.onclick = () => {
    firstBody.classList.add('hide')
    secondBody.classList.add('display')
    btn2.classList.add('display')
}

liXiBtn.onclick = () => {
    secondBody.classList.remove('display')
    video.classList.add('display')
    video.play()
}