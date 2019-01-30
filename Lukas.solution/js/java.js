document.addEventListener('DOMContentLoaded', function () {

// opgave 1 
    let i = 10
    let tekst = document.querySelector('.phase1')
    console.log(tekst)


    let timer = setInterval(() => {
        i--
        standard()
        console.log(i)

    }, 1000);
    standard()
 
    
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
//     alert("Its the final count down!")
    
// }, 10000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
    
// }, 9000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 8000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 7000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 6000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 5000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 4000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 3000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 2000);
// setTimeout(() => {
//     i--
//     console.log(i)
//     tekst.innerHTML = i
    
    
// }, 1000);
// console.log(i)

function standard() {
    tekst.innerHTML = i
    if ( i == 0 )
        {clearInterval(timer)}
}

// ===================================================================================================


// phase 2
let body = document.querySelector('body')
let phase2Button = document.querySelector('.phase2')
let donald = document.querySelector('.donald')
let bye = document.querySelector('.bye')
let color = document.querySelector('.color')
let tæller = 0


phase2Button.addEventListener('click', () => {

    donald.style.display = "block";

})
bye.addEventListener('click', () => {

    donald.style.display = "none";

})
color.addEventListener('click', () => {
    randomColor()
    
})



function randomColor() {
    console.log(tæller)
    if (tæller == 0){
    body.style.backgroundColor = "green";}

    else if (tæller == 1){
    body.style.backgroundColor = "blue";}

    else if (tæller == 2){
    body.style.backgroundColor = "red";}

    else if (tæller == 3){
    body.style.backgroundColor = "orange";}

    else if (tæller == 4){
        body.style.backgroundColor = "salmon"

            tæller = -1
    
console.log(tæller)
}
tæller++
}

})