let scores = document.querySelectorAll('.score--btn')
let marks = document.querySelectorAll('.score--num')

//scoreClick()
const scoreClick =()=>{
    console.log('button onclick')
    scores.classList.toggle('score--btn--onclick')
}

scores.forEach(function(score){
    score.addEventListener('click', scoreClick)
})

//submitScore()
/* let btnSubmit = document.querySelector('#submit')

const submitScore =()=>{
    
}

btnSubmit.addEventListener('click', submitScore) */