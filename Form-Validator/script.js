
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
let confpassword = document.getElementById('confpassword')
const form =document.getElementById('form')


//functions

const checkRequired= (inputArray)=>{
    inputArray.forEach(input =>{
        if(input.id==='confpassword'){
            input.id='password Confirmation'
        }
        if(input.value.length === 0){
            error(input, `${capitalLetter(input)} is required`) 
        }
        else {
            success(input)
        }
    });
}
const capitalLetter =(input)=>{
    return input.id[0].toUpperCase()+input.id.slice(1)
}

const checkPassword= (input, min, max)=>{
    if(input.value.length< min){
        error(input, `${capitalLetter(input)} is to short must be ${min} characters or higher`)
    }
    else{
        success(input)
    }
     
 }
 const matchingPass=(pass1, pass2)=>{
    
    for (let i in pass1.value){
       if(pass1.value[i]!==pass2.value[i] && pass1.value.length !== pass2.value.length){
           error(pass2,  ' password does not match')
       }
    }
    
 }


const error = (elem, message)=>{
    const formControl = elem.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message
}

const success = (elem)=>{
    const formControl =elem.parentElement;
    formControl.className = 'form-control success'
}

//event listeners

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkRequired([name, email, password, confpassword])
    checkPassword(password, 6, 25)
    matchingPass(password, confpassword)

})

