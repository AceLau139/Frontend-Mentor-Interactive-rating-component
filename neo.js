let pageOne = document.querySelector('.pageOne')
let pageTwo = document.querySelector('.pageTwo')
let btnSubmit = document.querySelector('.submit--container')
let btnScore = document.querySelectorAll('.score--btn')

let ratingValue

const thankYou =()=>{
    /* hidden */
    console.log('hidden Submit button')
    pageOne.style.display = "none";
    pageTwo.style.display = 'block';
    /* pageTwo.classList.replace('hidden', 'pageTwo') */
}

const rating =()=>{
    let scoreValue = 
    btnScore[0].style.backgroundColor = 'rgb(255, 128, 0)'
    btnScore[0].style.color = '#fff'
    /* classList.replace('score--btn', 'score--btn--onclick') */
}

btnSubmit.addEventListener('click', thankYou)
btnScore.forEach(function(score){
    score.addEventListener('click', rating)
})


//
/* marks.forEach(function (mark) {
    mark.addEventListener('click', () => {
      mark.style.backgroundColor = 'hsl(25, 97%, 53%)';
      markCount.innerHTML = mark.innerHTML;
    });
}); */
