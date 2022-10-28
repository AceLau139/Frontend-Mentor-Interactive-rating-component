let scores = document.querySelectorAll('.score--btn')
let marks = document.querySelectorAll('.score--num')

//scoreHover()
const scoreHover =()=>{
    console.log('button hover')
    scores.style.backgroundColor = 'grey'
    console.log('number hover')
    marks.style.color = 'white'
}

//scoreClick()
const scoreClick =()=>{
    console.log('button onclick')
    scores.classList.toggle('score--btn--onclick')
    console.log('number onclick')
    marks.classList.toggle('score--num--onclick')
}

scores.forEach(function(score){
    score.addEventListener('mouseover', scoreHover)
    score.addEventListener('click', scoreClick)
})

//submitScore()
/* let btnSubmit = document.querySelector('#submit')

const submitScore =()=>{
    
}

btnSubmit.addEventListener('click', submitScore) */