let scores = document.querySelectorAll('.score--btn')
let scoreDiv = document.querySelectorAll('.score--container')
let marks = document.querySelectorAll('.score--num')

let btnSubmit = document.querySelector('.submit--btn')
let iconSection = document.querySelector('.icon--container')
let image = document.querySelector('#icon')

let h2 = document.querySelector('.h2')
let p = document.querySelector('.p')

let ratingValue


//scoreClick()
const scoreClick =(x)=>{
    console.log('button onclick')
    scores[x].classList.replace('score--btn', 'score--btn--onclick')
    console.log('button onclicked')
}

scores.forEach(function(score){
    var scoreNum = score.textContent
    console.log(score.textContent)
    score.addEventListener('click', scoreClick)
})

//Submit Button
const thankYou =()=>{
    /* change img */
    image.src = `./images/illustration-thank-you.svg`
    image.style.height = `90px`
    iconSection.classList.replace('icon--container', 'thank')

    /* change heading */
    h2.innerHTML = `Thank you!`
    console.log('change h2')
    h2.classList.replace('h2', 'h2--flex')

    /* change p */
    p.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!`
    console.log('change p')
    p.classList.replace('p', 'p--flex')

    /* hidden */
    console.log('hidden Submit button')
    btnSubmit.style.display = "none";
    console.log('hidden Score button')
    scoreDiv[0].style.display = "none";
}

const value =()=>{
    scores.forEach(function(score){
        ratingValue = score.textContent
        console.log(ratingValue)
        score.addEventListener('click', scoreClick)
    })

    let valueDiv = document.createElement('div');
    valueDiv.innerHTML = `<div>You selected ${ratingValue} out of 5</div>`
    /* .innerHTML = `You selected ${ratingValue} out of 5` */

}

btnSubmit.addEventListener('click', thankYou)
btnSubmit.addEventListener('click', value)