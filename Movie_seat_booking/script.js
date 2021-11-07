const containermovies = document.querySelector('.containermovies')

const seats=document.querySelectorAll('.row .seat:not(.occupied)')

const movie=document.getElementById('movie')

let ticketValue=+movie.value
let count= document.getElementById('count')
let money=document.getElementById('count')

const selseats = document.querySelectorAll('.row .seat.selected')

console.log(selseats)






//eventlisteners

seats.forEach(e =>{
    e.addEventListener('click',()=>e.classList.toggle('selected'))
  
   
})


   




















