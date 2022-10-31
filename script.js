let pageOne = document.querySelector('.pageOne')
let pageTwo = document.querySelector('.pageTwo')
let btnSubmit = document.querySelector('.submit--container')
let btnScore = document.querySelectorAll('.score--btn')
let resultDiv = document.querySelector('.ratingValue')

let ratingValue

const thankYou =()=>{
    /* hidden */
    console.log('hidden Submit button')
    pageOne.style.display = "none";
    pageTwo.style.display = 'block';

    /* get score value */
    resultDiv.innerHTML = `You selected ${ratingValue} out of 5`
}

for(let i=0; i<btnScore.length; i++){
    /* change style */
    btnScore[i].addEventListener('click', function(){
        btnScore[i].classList.add('score--btn--onclick')
        return ratingValue = i+1
    })

    /* remove more than one button style */
    btnScore[i].addEventListener('mouseup', function(){
        for(let j=0; j<btnScore.length; j++){
            btnScore[j].classList.remove('score--btn--onclick')
            btnScore[j].classList.add('score--btn')
        }
    })
}

btnSubmit.addEventListener('click', thankYou)

